import { SCHEMA_QUERY } from "@/graphql/schema-query";
import { useQuery } from "urql";
import { zeroAddress } from "viem";

const PROJECTS_SCHEMA_ID =
  "0x8aef6b9adab6252367588ad337f304da1c060cc3190f01d7b72c7e512b9bfb38";

export const useEligibleProjects = () => {
  const [result] = useQuery({
    query: SCHEMA_QUERY,
    variables: {
      where: { id: PROJECTS_SCHEMA_ID },
      whereAttestation: {
        recipient: { not: { equals: zeroAddress } },
        revoked: { not: { equals: true } },
      },
    },
  });

  const projectsWithRefs =
    result.data?.getSchema?.attestations.map((project) => {
      const projectData = JSON.parse(project.decodedDataJson) as {
        value: { name: string; value: string };
      }[];

      return {
        ...project,
        // TODO: check with obUSD team if id is the original uid from schema 638
        // or the ProjectRefUID
        refUid: projectData.find((data) => data.value.name === "ProjectRefUID")
          ?.value.value as string,
      };
    }) ?? [];

  return {
    projects: projectsWithRefs,
    isLoading: result.fetching,
    error: result.error,
  };
};
