import { graphql } from "gql.tada";

export const SCHEMA_QUERY = graphql(`
  query Query($where: SchemaWhereUniqueInput!) {
    getSchema(where: $where) {
      id
      index
      schema
      attestations {
        recipient
        revoked
      }
    }
  }
`);
