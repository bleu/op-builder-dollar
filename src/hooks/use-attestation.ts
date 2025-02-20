import { ATTESTATION_QUERY } from "@/graphql/attestation-query";
import { useQuery } from "urql";

export const useAttestation = (id: string) => {
  const [result, refetch] = useQuery({
    query: ATTESTATION_QUERY,
    variables: { where: { id } },
  });

  return { ...result, refetch };
};
