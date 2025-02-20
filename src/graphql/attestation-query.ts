import { graphql } from "gql.tada";

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
