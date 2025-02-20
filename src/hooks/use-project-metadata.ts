import { ATTESTATION_QUERY } from "@/graphql/attestation-query";
import { useEffect, useState } from "react";
import { useQuery } from "urql";

interface ProjectMetadata {
  name: string;
  description: string;
  socialLinks: {
    website: string[];
  };
}

interface ProjectData {
  value: {
    name: string;
    value: string;
  };
}

export const useProjectMetadata = (projectUID?: string) => {
  const [metadata, setMetadata] = useState<ProjectMetadata | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [result] = useQuery({
    query: ATTESTATION_QUERY,
    variables: { where: { refUID: { equals: projectUID } } },
    pause: !projectUID,
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!result.data?.attestations?.length) return;

      setIsLoading(true);
      setError(null);

      try {
        // Process each attestation sequentially
        for (const project of result.data.attestations) {
          try {
            const projectData = JSON.parse(
              project.decodedDataJson,
            ) as ProjectData[];

            const metadataUrl = projectData.find(
              (data) => data.value.name.toLowerCase() === "metadataurl",
            )?.value.value;

            if (!metadataUrl) continue;

            const response = await fetch(metadataUrl);

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Validate required fields
            if (data?.name && data?.description) {
              setMetadata(data);
              return; // Exit after finding valid metadata
            }
          } catch (err) {
            console.error("Error processing attestation:", err);
            // Continue to next attestation if one fails
          }
        }

        // If we get here without finding valid metadata, set error
        setError(new Error("No valid metadata found in attestations"));
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [result.data?.attestations]);

  return {
    metadata,
    isLoading: isLoading || result.fetching,
    error: error || result.error,
    refetch: () => {
      setMetadata(null);
      setError(null);
    },
  };
};
