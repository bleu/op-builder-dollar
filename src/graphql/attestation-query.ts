import { graphql } from "gql.tada";

export const GET_ATTESTATION_QUERY = graphql(`
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

export const ATTESTATION_QUERY = graphql(`
  query Attestations($where: AttestationWhereInput) {
    attestations(where: $where) {
      id
      data
      decodedDataJson
      recipient
      attester
      time
      timeCreated
      expirationTime
      revocationTime
      refUID
      revocable
      revoked
      txid
      schemaId
      ipfsHash
      isOffchain
  }
}
`);
