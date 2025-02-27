import { ATTESTATION_QUERY } from "@/graphql/attestation-query";
import type { ResultOf } from "gql.tada";
import { useEffect, useState } from "react";
import { useQuery } from "urql";

export interface ProjectMetadata {
  name?: string;
  description?: string;
  socialLinks?: {
    website: string[];
  };
  [key: string]: unknown;
}

interface ProjectData {
  value: {
    name: string;
    value: string;
  };
}

interface ProjectMetadataUrl {
  projectUID: string;
  metadataUrl: string;
}

interface MetadataContent {
  name: string;
  description: string;
  [key: string]: unknown;
}

interface MetadataResult {
  projectUID: string;
  metadata: MetadataContent | null;
  metadataUrl: string;
  success: boolean;
}

export const useProjectMetadata = (projectUID?: string[]) => {
  const [allMetadata, setAllMetadata] =
    useState<Map<string, ProjectMetadata>>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [result] = useQuery({
    query: ATTESTATION_QUERY,
    variables: { where: { refUID: { in: projectUID } } },
    pause: !projectUID,
  });

  useEffect(() => {
    const fetchAllMetadata = async (
      response: ResultOf<typeof ATTESTATION_QUERY>["attestations"],
    ) => {
      const projectsMetadataURLs: ProjectMetadataUrl[] = [];

      setIsLoading(true);

      for (const project of response) {
        try {
          const projectData = JSON.parse(
            project.decodedDataJson,
          ) as ProjectData[];

          const metadataUrl = projectData.find(
            (data) => data.value.name.toLowerCase() === "metadataurl",
          )?.value.value;

          if (metadataUrl) {
            projectsMetadataURLs.push({
              projectUID: project.refUID,
              metadataUrl,
            });
          }
        } catch (error) {
          console.error(
            `Error parsing project data for ${project.refUID}:`,
            error,
          );
        }
      }

      // Fetch metadata from all URLs
      const metadataResults = await Promise.all(
        projectsMetadataURLs.map(async ({ projectUID, metadataUrl }) => {
          try {
            const response = await fetch(metadataUrl);
            const metadata = await response.json();

            return {
              projectUID,
              metadata,
              metadataUrl,
              success: true,
            } as MetadataResult;
          } catch (error) {
            console.error(
              `Error fetching metadata from ${metadataUrl}:`,
              error,
            );
            return {
              projectUID,
              metadata: null,
              metadataUrl,
              success: false,
            } as MetadataResult;
          }
        }),
      );

      // Group results by project ID
      const projectGroups = metadataResults.reduce<
        Record<string, MetadataResult[]>
      >((groups, result) => {
        if (!groups[result.projectUID]) {
          groups[result.projectUID] = [];
        }

        if (result.success) {
          groups[result.projectUID].push(result);
        }

        return groups;
      }, {});

      // Find the first valid metadata for each project
      const validProjects: Map<string, ProjectMetadata> = new Map();

      for (const [projectUID, results] of Object.entries(projectGroups)) {
        // Find the first result with both name and description
        const validResult = results.find(
          (result) => result?.metadata?.name && result?.metadata?.description,
        );

        if (validResult?.metadata) {
          validProjects.set(projectUID, validResult.metadata);
        }
      }
      setIsLoading(false);

      return validProjects;
    };

    if (result.data?.attestations) {
      fetchAllMetadata(result.data.attestations)
        .then((validProjects) => {
          setAllMetadata(validProjects);
        })
        .catch((err) => {
          setError(err instanceof Error ? err : new Error(String(err)));
        });
    }
  }, [result.data?.attestations]);

  return {
    allMetadata,
    isLoading: isLoading || result.fetching,
    error: error || result.error,
    refetch: () => {
      setAllMetadata(undefined);
      setError(null);
    },
  };
};
