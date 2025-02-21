export const buildersManagerAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_project",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_attestation",
        type: "bytes32",
      },
    ],
    name: "ProjectReachedMinVouches",
    type: "event",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "cycleLength",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastClaimedTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "currentSeasonExpiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "seasonDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minVouches",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "optimismFoundationAttesters",
            type: "address[]",
          },
        ],
        internalType: "struct IBuildersManager.BuilderManagerSettings",
        name: "__settings",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_project",
        type: "address",
      },
    ],
    name: "projectToVouchers",
    outputs: [
      {
        internalType: "address[]",
        name: "_vouchers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentProjects",
    outputs: [
      {
        internalType: "address[]",
        name: "_projects",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentProjectUids",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "_uids",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimismFoundationAttesters",
    outputs: [
      {
        internalType: "address[]",
        name: "_opAttesters",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
