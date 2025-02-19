import { SCHEMA_QUERY } from "@/graphql/schema-query";
import { useQuery } from "urql";

const CITIZEN_SCHEMA_ID =
  "0x41513aa7b99bfea09d389c74aacedaeb13c28fb748569e9e2400109cbe284ee5";

export const useCitizen = (address: `0x${string}`) => {
  const [{ data, ...result }, refetch] = useQuery({
    query: SCHEMA_QUERY,
    variables: { where: { id: CITIZEN_SCHEMA_ID } },
  });

  const citizensList = data?.getSchema?.attestations.map(
    (attestation) => attestation.recipient,
  );

  const isCitizen = citizensList?.includes(address);

  return { citizensList, isCitizen, refetch, data, ...result };
};
