import { graphql } from "gql.tada";
import { useQuery } from "urql";

export const ATTESTATION_QUERY = graphql(`
  query Attestation($where: AttestationWhereUniqueInput!) {
    getAttestation(where: $where) {
      id
      attester
      recipient
      data
      decodedDataJson
      time
      expirationTime
      revocationTime
      refUID
      revocable
      revoked
      txid
      ipfsHash
    }
  }
`);

export const useAttestation = (id: string) => {
  const [result, refetch] = useQuery({
    query: ATTESTATION_QUERY,
    variables: { where: { id } },
  });

  return { ...result, refetch };
};
