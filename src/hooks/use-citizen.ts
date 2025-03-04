import { SCHEMA_QUERY } from "@/graphql/schema-query";
import { CITIZEN_SCHEMA_ID } from "@/utils/constants";
import { useQuery } from "urql";
import { useAccount } from "wagmi";
import { useReadBuildersManager } from "./use-read-builders-manager";

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
