import { GET_ATTESTATION_QUERY } from "@/graphql/attestation-query";
import { useQuery } from "urql";

export const useAttestation = (id: string) => {
  const [result, refetch] = useQuery({
    query: GET_ATTESTATION_QUERY,
    variables: { where: { id } },
  });

  return { ...result, refetch };
};
