import { graphql } from "gql.tada";

export const SCHEMA_QUERY = graphql(`
  query Query($where: SchemaWhereUniqueInput!, $whereAttestation: AttestationWhereInput) {
    getSchema(where: $where) {
      id
      index
      schema
      attestations(where: $whereAttestation) {
        recipient
        revoked
        decodedDataJson
        id
      }
    }
  }
`);
