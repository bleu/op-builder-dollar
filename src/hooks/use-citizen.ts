import { SCHEMA_QUERY } from "@/graphql/schema-query";
import { useQuery } from "urql";
import { useAccount } from "wagmi";
import { useReadBuildersManager } from "./use-read-builders-manager";

const CITIZEN_SCHEMA_ID =
  "0x41513aa7b99bfea09d389c74aacedaeb13c28fb748569e9e2400109cbe284ee5";

export const useCitizen = () => {
  const [{ data, ...result }, refetch] = useQuery({
    query: SCHEMA_QUERY,
    variables: { where: { id: CITIZEN_SCHEMA_ID } },
    requestPolicy: "cache-first",
  });

  const { address } = useAccount();

  const { data: buildersManagerData } = useReadBuildersManager();
  const { optimismFoundationAttesters } = buildersManagerData ?? {};

  const citizenAttestations = data?.getSchema?.attestations.filter(
    (attestation) => !attestation.revoked,
  );

  const citizensList = citizenAttestations?.map(
    (attestation) => attestation.recipient,
  );

  const isCitizen =
    address &&
    (citizensList?.includes(address) ||
      optimismFoundationAttesters?.includes(address));

  const citizenAttestationUid =
    address && citizensList?.includes(address)
      ? (citizenAttestations?.find(
          (attestation) => attestation.recipient === address,
        )?.id as `0x${string}`)
      : undefined;
  data?.getSchema?.attestations.find((attestation) => !attestation.revoked);

  return {
    citizensList,
    citizenAttestationUid,
    isCitizen,
    refetch,
    data,
    ...result,
  };
};
