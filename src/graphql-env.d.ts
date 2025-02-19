/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
  AffectedRowsOutput: {
    kind: "OBJECT";
    name: "AffectedRowsOutput";
    fields: {
      count: {
        name: "count";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  AggregateAttestation: {
    kind: "OBJECT";
    name: "AggregateAttestation";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "AttestationAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "AttestationCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "AttestationMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "AttestationMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "AttestationSumAggregate"; ofType: null };
      };
    };
  };
  AggregateEnsName: {
    kind: "OBJECT";
    name: "AggregateEnsName";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "EnsNameAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "EnsNameCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "EnsNameMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "EnsNameMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "EnsNameSumAggregate"; ofType: null };
      };
    };
  };
  AggregateOffchainRevocation: {
    kind: "OBJECT";
    name: "AggregateOffchainRevocation";
    fields: {
      _avg: {
        name: "_avg";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationAvgAggregate";
          ofType: null;
        };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationMaxAggregate";
          ofType: null;
        };
      };
      _min: {
        name: "_min";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationMinAggregate";
          ofType: null;
        };
      };
      _sum: {
        name: "_sum";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationSumAggregate";
          ofType: null;
        };
      };
    };
  };
  AggregateSchema: {
    kind: "OBJECT";
    name: "AggregateSchema";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "SchemaAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "SchemaCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "SchemaMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "SchemaMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "SchemaSumAggregate"; ofType: null };
      };
    };
  };
  AggregateSchemaName: {
    kind: "OBJECT";
    name: "AggregateSchemaName";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "SchemaNameAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "SchemaNameCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "SchemaNameMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "SchemaNameMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "SchemaNameSumAggregate"; ofType: null };
      };
    };
  };
  AggregateServiceStat: {
    kind: "OBJECT";
    name: "AggregateServiceStat";
    fields: {
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "ServiceStatCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "ServiceStatMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "ServiceStatMinAggregate"; ofType: null };
      };
    };
  };
  AggregateTimestamp: {
    kind: "OBJECT";
    name: "AggregateTimestamp";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "TimestampAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "TimestampCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "TimestampMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "TimestampMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "TimestampSumAggregate"; ofType: null };
      };
    };
  };
  Attestation: {
    kind: "OBJECT";
    name: "Attestation";
    fields: {
      attester: {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      data: {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      decodedDataJson: {
        name: "decodedDataJson";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      expirationTime: {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      ipfsHash: {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      isOffchain: {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      recipient: {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      refUID: {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      revocationTime: {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revoked: {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      schema: {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Schema"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timeCreated: {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  AttestationAvgAggregate: {
    kind: "OBJECT";
    name: "AttestationAvgAggregate";
    fields: {
      expirationTime: {
        name: "expirationTime";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      revocationTime: {
        name: "revocationTime";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
      timeCreated: {
        name: "timeCreated";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  AttestationAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationCountAggregate: {
    kind: "OBJECT";
    name: "AttestationCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      attester: {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      data: {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      decodedDataJson: {
        name: "decodedDataJson";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      expirationTime: {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      ipfsHash: {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      isOffchain: {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      recipient: {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      refUID: {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revocationTime: {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revoked: {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timeCreated: {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  AttestationCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateNestedOneWithoutAttestationsInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateManySchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateManySchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateManySchemaInputEnvelope: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateManySchemaInputEnvelope";
    isOneOf: false;
    inputFields: [
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "INPUT_OBJECT";
                name: "AttestationCreateManySchemaInput";
                ofType: null;
              };
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "skipDuplicates";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateNestedManyWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateNestedManyWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationCreateWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationCreateOrConnectWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "createMany";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationCreateManySchemaInputEnvelope";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateOrConnectWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateOrConnectWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationCreateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationCreateWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationCreateWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationGroupBy: {
    kind: "OBJECT";
    name: "AttestationGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "AttestationAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "AttestationCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "AttestationMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "AttestationMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "AttestationSumAggregate"; ofType: null };
      };
      attester: {
        name: "attester";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      data: {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      decodedDataJson: {
        name: "decodedDataJson";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      expirationTime: {
        name: "expirationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      ipfsHash: {
        name: "ipfsHash";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      isOffchain: {
        name: "isOffchain";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      recipient: {
        name: "recipient";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      refUID: {
        name: "refUID";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      revocationTime: {
        name: "revocationTime";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revoked: {
        name: "revoked";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timeCreated: {
        name: "timeCreated";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  AttestationListRelationFilter: {
    kind: "INPUT_OBJECT";
    name: "AttestationListRelationFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "every";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "some";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "none";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationMaxAggregate: {
    kind: "OBJECT";
    name: "AttestationMaxAggregate";
    fields: {
      attester: {
        name: "attester";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      data: {
        name: "data";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      decodedDataJson: {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      expirationTime: {
        name: "expirationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      ipfsHash: {
        name: "ipfsHash";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      isOffchain: {
        name: "isOffchain";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      recipient: {
        name: "recipient";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      refUID: {
        name: "refUID";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      revocable: {
        name: "revocable";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      revocationTime: {
        name: "revocationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      revoked: {
        name: "revoked";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      schemaId: {
        name: "schemaId";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      timeCreated: {
        name: "timeCreated";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  AttestationMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationMinAggregate: {
    kind: "OBJECT";
    name: "AttestationMinAggregate";
    fields: {
      attester: {
        name: "attester";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      data: {
        name: "data";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      decodedDataJson: {
        name: "decodedDataJson";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      expirationTime: {
        name: "expirationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      ipfsHash: {
        name: "ipfsHash";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      isOffchain: {
        name: "isOffchain";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      recipient: {
        name: "recipient";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      refUID: {
        name: "refUID";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      revocable: {
        name: "revocable";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      revocationTime: {
        name: "revocationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      revoked: {
        name: "revoked";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      schemaId: {
        name: "schemaId";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      timeCreated: {
        name: "timeCreated";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  AttestationMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationOrderByRelationAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationOrderByRelationAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "_count";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaOrderByWithRelationInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationScalarFieldEnum: {
    name: "AttestationScalarFieldEnum";
    enumValues:
      | "id"
      | "data"
      | "decodedDataJson"
      | "recipient"
      | "attester"
      | "time"
      | "timeCreated"
      | "expirationTime"
      | "revocationTime"
      | "refUID"
      | "revocable"
      | "revoked"
      | "txid"
      | "schemaId"
      | "ipfsHash"
      | "isOffchain";
  };
  AttestationScalarWhereInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationScalarWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationSumAggregate: {
    kind: "OBJECT";
    name: "AttestationSumAggregate";
    fields: {
      expirationTime: {
        name: "expirationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      revocationTime: {
        name: "revocationTime";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      timeCreated: {
        name: "timeCreated";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  AttestationSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpdateOneRequiredWithoutAttestationsNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateManyWithWhereWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateManyWithWhereWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationScalarWhereInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationUpdateManyMutationInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateManyWithoutSchemaNestedInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateManyWithoutSchemaNestedInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationCreateWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationCreateOrConnectWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "upsert";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationUpsertWithWhereUniqueWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "createMany";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationCreateManySchemaInputEnvelope";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "set";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "disconnect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "delete";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationUpdateWithWhereUniqueWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "updateMany";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationUpdateManyWithWhereWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "deleteMany";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateWithWhereUniqueWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateWithWhereUniqueWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationUpdateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpdateWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpdateWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attester";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationUpsertWithWhereUniqueWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationUpsertWithWhereUniqueWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationUpdateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "AttestationCreateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  AttestationWhereInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "AttestationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "data";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decodedDataJson";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "recipient";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attester";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timeCreated";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "expirationTime";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocationTime";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "refUID";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revoked";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "ipfsHash";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isOffchain";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaRelationFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  AttestationWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "AttestationWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  BoolFieldUpdateOperationsInput: {
    kind: "INPUT_OBJECT";
    name: "BoolFieldUpdateOperationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "set";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  BoolFilter: {
    kind: "INPUT_OBJECT";
    name: "BoolFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  BoolWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "BoolWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedBoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_max";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Boolean: unknown;
  EnsName: {
    kind: "OBJECT";
    name: "EnsName";
    fields: {
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  EnsNameAvgAggregate: {
    kind: "OBJECT";
    name: "EnsNameAvgAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  EnsNameAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameCountAggregate: {
    kind: "OBJECT";
    name: "EnsNameCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  EnsNameCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameCreateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameGroupBy: {
    kind: "OBJECT";
    name: "EnsNameGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "EnsNameAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "EnsNameCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "EnsNameMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "EnsNameMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "EnsNameSumAggregate"; ofType: null };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  EnsNameMaxAggregate: {
    kind: "OBJECT";
    name: "EnsNameMaxAggregate";
    fields: {
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  EnsNameMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameMinAggregate: {
    kind: "OBJECT";
    name: "EnsNameMinAggregate";
    fields: {
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  EnsNameMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "EnsNameCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "EnsNameAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "EnsNameMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "EnsNameMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "EnsNameSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameScalarFieldEnum: {
    name: "EnsNameScalarFieldEnum";
    enumValues: "id" | "name" | "timestamp";
  };
  EnsNameScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameSumAggregate: {
    kind: "OBJECT";
    name: "EnsNameSumAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  EnsNameSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  EnsNameWhereInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "EnsNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EnsNameWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "EnsNameWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Float: unknown;
  Int: unknown;
  IntFieldUpdateOperationsInput: {
    kind: "INPUT_OBJECT";
    name: "IntFieldUpdateOperationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "set";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "increment";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "decrement";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "multiply";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "divide";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  IntFilter: {
    kind: "INPUT_OBJECT";
    name: "IntFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  IntWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "IntWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedIntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: { kind: "INPUT_OBJECT"; name: "NestedFloatFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_max";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Mutation: {
    kind: "OBJECT";
    name: "Mutation";
    fields: {
      createManyAttestation: {
        name: "createManyAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManyEnsName: {
        name: "createManyEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManyOffchainRevocation: {
        name: "createManyOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManySchema: {
        name: "createManySchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManySchemaName: {
        name: "createManySchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManyServiceStat: {
        name: "createManyServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createManyTimestamp: {
        name: "createManyTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      createOneAttestation: {
        name: "createOneAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Attestation"; ofType: null };
        };
      };
      createOneEnsName: {
        name: "createOneEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "EnsName"; ofType: null };
        };
      };
      createOneOffchainRevocation: {
        name: "createOneOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
        };
      };
      createOneSchema: {
        name: "createOneSchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Schema"; ofType: null };
        };
      };
      createOneSchemaName: {
        name: "createOneSchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
        };
      };
      createOneServiceStat: {
        name: "createOneServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
        };
      };
      createOneTimestamp: {
        name: "createOneTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
        };
      };
      deleteManyAttestation: {
        name: "deleteManyAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManyEnsName: {
        name: "deleteManyEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManyOffchainRevocation: {
        name: "deleteManyOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManySchema: {
        name: "deleteManySchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManySchemaName: {
        name: "deleteManySchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManyServiceStat: {
        name: "deleteManyServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteManyTimestamp: {
        name: "deleteManyTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      deleteOneAttestation: {
        name: "deleteOneAttestation";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      deleteOneEnsName: {
        name: "deleteOneEnsName";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      deleteOneOffchainRevocation: {
        name: "deleteOneOffchainRevocation";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      deleteOneSchema: {
        name: "deleteOneSchema";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      deleteOneSchemaName: {
        name: "deleteOneSchemaName";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      deleteOneServiceStat: {
        name: "deleteOneServiceStat";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      deleteOneTimestamp: {
        name: "deleteOneTimestamp";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      updateManyAttestation: {
        name: "updateManyAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManyEnsName: {
        name: "updateManyEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManyOffchainRevocation: {
        name: "updateManyOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManySchema: {
        name: "updateManySchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManySchemaName: {
        name: "updateManySchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManyServiceStat: {
        name: "updateManyServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateManyTimestamp: {
        name: "updateManyTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AffectedRowsOutput"; ofType: null };
        };
      };
      updateOneAttestation: {
        name: "updateOneAttestation";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      updateOneEnsName: {
        name: "updateOneEnsName";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      updateOneOffchainRevocation: {
        name: "updateOneOffchainRevocation";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      updateOneSchema: {
        name: "updateOneSchema";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      updateOneSchemaName: {
        name: "updateOneSchemaName";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      updateOneServiceStat: {
        name: "updateOneServiceStat";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      updateOneTimestamp: {
        name: "updateOneTimestamp";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      upsertOneAttestation: {
        name: "upsertOneAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Attestation"; ofType: null };
        };
      };
      upsertOneEnsName: {
        name: "upsertOneEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "EnsName"; ofType: null };
        };
      };
      upsertOneOffchainRevocation: {
        name: "upsertOneOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
        };
      };
      upsertOneSchema: {
        name: "upsertOneSchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Schema"; ofType: null };
        };
      };
      upsertOneSchemaName: {
        name: "upsertOneSchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
        };
      };
      upsertOneServiceStat: {
        name: "upsertOneServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
        };
      };
      upsertOneTimestamp: {
        name: "upsertOneTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
        };
      };
    };
  };
  NestedBoolFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedBoolFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NestedBoolWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedBoolWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedBoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_max";
        type: { kind: "INPUT_OBJECT"; name: "NestedBoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NestedFloatFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedFloatFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: { kind: "INPUT_OBJECT"; name: "NestedFloatFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NestedIntFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedIntFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NestedIntWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedIntWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedIntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: { kind: "INPUT_OBJECT"; name: "NestedFloatFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_max";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NestedStringFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedStringFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "contains";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "startsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "endsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  NestedStringWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "NestedStringWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "contains";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "startsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "endsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocation: {
    kind: "OBJECT";
    name: "OffchainRevocation";
    fields: {
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      uid: {
        name: "uid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  OffchainRevocationAvgAggregate: {
    kind: "OBJECT";
    name: "OffchainRevocationAvgAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  OffchainRevocationAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationCountAggregate: {
    kind: "OBJECT";
    name: "OffchainRevocationCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      uid: {
        name: "uid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  OffchainRevocationCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationCreateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "uid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "uid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationGroupBy: {
    kind: "OBJECT";
    name: "OffchainRevocationGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationAvgAggregate";
          ofType: null;
        };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationMaxAggregate";
          ofType: null;
        };
      };
      _min: {
        name: "_min";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationMinAggregate";
          ofType: null;
        };
      };
      _sum: {
        name: "_sum";
        type: {
          kind: "OBJECT";
          name: "OffchainRevocationSumAggregate";
          ofType: null;
        };
      };
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      uid: {
        name: "uid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  OffchainRevocationMaxAggregate: {
    kind: "OBJECT";
    name: "OffchainRevocationMaxAggregate";
    fields: {
      from: {
        name: "from";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      uid: {
        name: "uid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  OffchainRevocationMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationMinAggregate: {
    kind: "OBJECT";
    name: "OffchainRevocationMinAggregate";
    fields: {
      from: {
        name: "from";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      uid: {
        name: "uid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  OffchainRevocationMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "OffchainRevocationCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "OffchainRevocationAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "OffchainRevocationMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "OffchainRevocationMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "OffchainRevocationSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationScalarFieldEnum: {
    name: "OffchainRevocationScalarFieldEnum";
    enumValues: "id" | "from" | "uid" | "txid" | "timestamp";
  };
  OffchainRevocationScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "uid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationSumAggregate: {
    kind: "OBJECT";
    name: "OffchainRevocationSumAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  OffchainRevocationSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "uid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "uid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationWhereInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "OffchainRevocationWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "uid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  OffchainRevocationWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "OffchainRevocationWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Query: {
    kind: "OBJECT";
    name: "Query";
    fields: {
      aggregateAttestation: {
        name: "aggregateAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "OBJECT";
            name: "AggregateAttestation";
            ofType: null;
          };
        };
      };
      aggregateEnsName: {
        name: "aggregateEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AggregateEnsName"; ofType: null };
        };
      };
      aggregateOffchainRevocation: {
        name: "aggregateOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "OBJECT";
            name: "AggregateOffchainRevocation";
            ofType: null;
          };
        };
      };
      aggregateSchema: {
        name: "aggregateSchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AggregateSchema"; ofType: null };
        };
      };
      aggregateSchemaName: {
        name: "aggregateSchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AggregateSchemaName"; ofType: null };
        };
      };
      aggregateServiceStat: {
        name: "aggregateServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "OBJECT";
            name: "AggregateServiceStat";
            ofType: null;
          };
        };
      };
      aggregateTimestamp: {
        name: "aggregateTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AggregateTimestamp"; ofType: null };
        };
      };
      attestation: {
        name: "attestation";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      attestations: {
        name: "attestations";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "Attestation"; ofType: null };
            };
          };
        };
      };
      ensName: {
        name: "ensName";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      ensNames: {
        name: "ensNames";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "EnsName"; ofType: null };
            };
          };
        };
      };
      findFirstAttestation: {
        name: "findFirstAttestation";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      findFirstAttestationOrThrow: {
        name: "findFirstAttestationOrThrow";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      findFirstEnsName: {
        name: "findFirstEnsName";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      findFirstEnsNameOrThrow: {
        name: "findFirstEnsNameOrThrow";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      findFirstOffchainRevocation: {
        name: "findFirstOffchainRevocation";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      findFirstOffchainRevocationOrThrow: {
        name: "findFirstOffchainRevocationOrThrow";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      findFirstSchema: {
        name: "findFirstSchema";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      findFirstSchemaName: {
        name: "findFirstSchemaName";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      findFirstSchemaNameOrThrow: {
        name: "findFirstSchemaNameOrThrow";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      findFirstSchemaOrThrow: {
        name: "findFirstSchemaOrThrow";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      findFirstServiceStat: {
        name: "findFirstServiceStat";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      findFirstServiceStatOrThrow: {
        name: "findFirstServiceStatOrThrow";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      findFirstTimestamp: {
        name: "findFirstTimestamp";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      findFirstTimestampOrThrow: {
        name: "findFirstTimestampOrThrow";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      getAttestation: {
        name: "getAttestation";
        type: { kind: "OBJECT"; name: "Attestation"; ofType: null };
      };
      getEnsName: {
        name: "getEnsName";
        type: { kind: "OBJECT"; name: "EnsName"; ofType: null };
      };
      getOffchainRevocation: {
        name: "getOffchainRevocation";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      getSchema: {
        name: "getSchema";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      getSchemaName: {
        name: "getSchemaName";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      getServiceStat: {
        name: "getServiceStat";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      getTimestamp: {
        name: "getTimestamp";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      groupByAttestation: {
        name: "groupByAttestation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "AttestationGroupBy";
                ofType: null;
              };
            };
          };
        };
      };
      groupByEnsName: {
        name: "groupByEnsName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "EnsNameGroupBy"; ofType: null };
            };
          };
        };
      };
      groupByOffchainRevocation: {
        name: "groupByOffchainRevocation";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "OffchainRevocationGroupBy";
                ofType: null;
              };
            };
          };
        };
      };
      groupBySchema: {
        name: "groupBySchema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "SchemaGroupBy"; ofType: null };
            };
          };
        };
      };
      groupBySchemaName: {
        name: "groupBySchemaName";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "SchemaNameGroupBy";
                ofType: null;
              };
            };
          };
        };
      };
      groupByServiceStat: {
        name: "groupByServiceStat";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "ServiceStatGroupBy";
                ofType: null;
              };
            };
          };
        };
      };
      groupByTimestamp: {
        name: "groupByTimestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "TimestampGroupBy";
                ofType: null;
              };
            };
          };
        };
      };
      offchainRevocation: {
        name: "offchainRevocation";
        type: { kind: "OBJECT"; name: "OffchainRevocation"; ofType: null };
      };
      offchainRevocations: {
        name: "offchainRevocations";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "OBJECT";
                name: "OffchainRevocation";
                ofType: null;
              };
            };
          };
        };
      };
      schema: {
        name: "schema";
        type: { kind: "OBJECT"; name: "Schema"; ofType: null };
      };
      schemaName: {
        name: "schemaName";
        type: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
      };
      schemaNames: {
        name: "schemaNames";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
            };
          };
        };
      };
      schemata: {
        name: "schemata";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "Schema"; ofType: null };
            };
          };
        };
      };
      serviceStat: {
        name: "serviceStat";
        type: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
      };
      serviceStats: {
        name: "serviceStats";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "ServiceStat"; ofType: null };
            };
          };
        };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
      };
      timestamps: {
        name: "timestamps";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "Timestamp"; ofType: null };
            };
          };
        };
      };
    };
  };
  QueryMode: { name: "QueryMode"; enumValues: "default" | "insensitive" };
  Schema: {
    kind: "OBJECT";
    name: "Schema";
    fields: {
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "SchemaCount"; ofType: null };
      };
      attestations: {
        name: "attestations";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "Attestation"; ofType: null };
            };
          };
        };
      };
      creator: {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      index: {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      resolver: {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      schema: {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      schemaNames: {
        name: "schemaNames";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "SchemaName"; ofType: null };
            };
          };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  SchemaAvgAggregate: {
    kind: "OBJECT";
    name: "SchemaAvgAggregate";
    fields: {
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  SchemaAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaCount: {
    kind: "OBJECT";
    name: "SchemaCount";
    fields: {
      attestations: {
        name: "attestations";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      schemaNames: {
        name: "schemaNames";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  SchemaCountAggregate: {
    kind: "OBJECT";
    name: "SchemaCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      creator: {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      index: {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      resolver: {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      schema: {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  SchemaCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationCreateNestedManyWithoutSchemaInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameCreateNestedManyWithoutSchemaInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateNestedOneWithoutAttestationsInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateNestedOneWithoutAttestationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateOrConnectWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaWhereUniqueInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateNestedOneWithoutSchemaNamesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateNestedOneWithoutSchemaNamesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateOrConnectWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaWhereUniqueInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateOrConnectWithoutAttestationsInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateOrConnectWithoutAttestationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateWithoutAttestationsInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateOrConnectWithoutSchemaNamesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateOrConnectWithoutSchemaNamesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateWithoutSchemaNamesInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateWithoutAttestationsInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateWithoutAttestationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameCreateNestedManyWithoutSchemaInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaCreateWithoutSchemaNamesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaCreateWithoutSchemaNamesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationCreateNestedManyWithoutSchemaInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaGroupBy: {
    kind: "OBJECT";
    name: "SchemaGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "SchemaAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "SchemaCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "SchemaMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "SchemaMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "SchemaSumAggregate"; ofType: null };
      };
      creator: {
        name: "creator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      index: {
        name: "index";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      resolver: {
        name: "resolver";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      revocable: {
        name: "revocable";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      schema: {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  SchemaMaxAggregate: {
    kind: "OBJECT";
    name: "SchemaMaxAggregate";
    fields: {
      creator: {
        name: "creator";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      index: {
        name: "index";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      resolver: {
        name: "resolver";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      revocable: {
        name: "revocable";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      schema: {
        name: "schema";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  SchemaMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaMinAggregate: {
    kind: "OBJECT";
    name: "SchemaMinAggregate";
    fields: {
      creator: {
        name: "creator";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      index: {
        name: "index";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      resolver: {
        name: "resolver";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      revocable: {
        name: "revocable";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      schema: {
        name: "schema";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  SchemaMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaName: {
    kind: "OBJECT";
    name: "SchemaName";
    fields: {
      attesterAddress: {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      isCreator: {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      schema: {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "Schema"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  SchemaNameAvgAggregate: {
    kind: "OBJECT";
    name: "SchemaNameAvgAggregate";
    fields: {
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  SchemaNameAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCountAggregate: {
    kind: "OBJECT";
    name: "SchemaNameCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      attesterAddress: {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      isCreator: {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  SchemaNameCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateNestedOneWithoutSchemaNamesInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateManySchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateManySchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateManySchemaInputEnvelope: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateManySchemaInputEnvelope";
    isOneOf: false;
    inputFields: [
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: {
                kind: "INPUT_OBJECT";
                name: "SchemaNameCreateManySchemaInput";
                ofType: null;
              };
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "skipDuplicates";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateNestedManyWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateNestedManyWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameCreateWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameCreateOrConnectWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "createMany";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameCreateManySchemaInputEnvelope";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateOrConnectWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateOrConnectWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameCreateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameCreateWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameCreateWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameGroupBy: {
    kind: "OBJECT";
    name: "SchemaNameGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "SchemaNameAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "SchemaNameCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "SchemaNameMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "SchemaNameMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "SchemaNameSumAggregate"; ofType: null };
      };
      attesterAddress: {
        name: "attesterAddress";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      isCreator: {
        name: "isCreator";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      schemaId: {
        name: "schemaId";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      time: {
        name: "time";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  SchemaNameListRelationFilter: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameListRelationFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "every";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "some";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "none";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameWhereInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameMaxAggregate: {
    kind: "OBJECT";
    name: "SchemaNameMaxAggregate";
    fields: {
      attesterAddress: {
        name: "attesterAddress";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      isCreator: {
        name: "isCreator";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      schemaId: {
        name: "schemaId";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  SchemaNameMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameMinAggregate: {
    kind: "OBJECT";
    name: "SchemaNameMinAggregate";
    fields: {
      attesterAddress: {
        name: "attesterAddress";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      isCreator: {
        name: "isCreator";
        type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
      };
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      schemaId: {
        name: "schemaId";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  SchemaNameMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameOrderByRelationAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameOrderByRelationAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "_count";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaOrderByWithRelationInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameScalarFieldEnum: {
    name: "SchemaNameScalarFieldEnum";
    enumValues:
      | "id"
      | "schemaId"
      | "attesterAddress"
      | "name"
      | "time"
      | "isCreator";
  };
  SchemaNameScalarWhereInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameScalarWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameSumAggregate: {
    kind: "OBJECT";
    name: "SchemaNameSumAggregate";
    fields: {
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  SchemaNameSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateManyWithWhereWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateManyWithWhereWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameScalarWhereInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameUpdateManyMutationInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateManyWithoutSchemaNestedInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateManyWithoutSchemaNestedInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameCreateWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameCreateOrConnectWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "upsert";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameUpsertWithWhereUniqueWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "createMany";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameCreateManySchemaInputEnvelope";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "set";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "disconnect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "delete";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereUniqueInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameUpdateWithWhereUniqueWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "updateMany";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameUpdateManyWithWhereWithoutSchemaInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "deleteMany";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameScalarWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateWithWhereUniqueWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateWithWhereUniqueWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "data";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameUpdateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpdateWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpdateWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameUpsertWithWhereUniqueWithoutSchemaInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameUpsertWithWhereUniqueWithoutSchemaInput";
    isOneOf: false;
    inputFields: [
      {
        name: "where";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameWhereUniqueInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameUpdateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaNameCreateWithoutSchemaInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameWhereInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaNameWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schemaId";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attesterAddress";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isCreator";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaRelationFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaNameWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaNameWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationOrderByRelationAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameOrderByRelationAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaRelationFilter: {
    kind: "INPUT_OBJECT";
    name: "SchemaRelationFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "is";
        type: { kind: "INPUT_OBJECT"; name: "SchemaWhereInput"; ofType: null };
        defaultValue: null;
      },
      {
        name: "isNot";
        type: { kind: "INPUT_OBJECT"; name: "SchemaWhereInput"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaScalarFieldEnum: {
    name: "SchemaScalarFieldEnum";
    enumValues:
      | "id"
      | "schema"
      | "creator"
      | "resolver"
      | "revocable"
      | "index"
      | "txid"
      | "time";
  };
  SchemaScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaSumAggregate: {
    kind: "OBJECT";
    name: "SchemaSumAggregate";
    fields: {
      time: {
        name: "time";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  SchemaSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "time";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationUpdateManyWithoutSchemaNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameUpdateManyWithoutSchemaNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateOneRequiredWithoutAttestationsNestedInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateOneRequiredWithoutAttestationsNestedInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateOrConnectWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "upsert";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpsertWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaWhereUniqueInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpdateWithoutAttestationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput";
    isOneOf: false;
    inputFields: [
      {
        name: "create";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connectOrCreate";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaCreateOrConnectWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "upsert";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpsertWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "connect";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaWhereUniqueInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "update";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaUpdateWithoutSchemaNamesInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateWithoutAttestationsInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateWithoutAttestationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameUpdateManyWithoutSchemaNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpdateWithoutSchemaNamesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpdateWithoutSchemaNamesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schema";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "creator";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: {
          kind: "INPUT_OBJECT";
          name: "BoolFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "index";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "time";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationUpdateManyWithoutSchemaNestedInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpsertWithoutAttestationsInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpsertWithoutAttestationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "update";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaUpdateWithoutAttestationsInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateWithoutAttestationsInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaUpsertWithoutSchemaNamesInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaUpsertWithoutSchemaNamesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "update";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaUpdateWithoutSchemaNamesInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: "create";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "INPUT_OBJECT";
            name: "SchemaCreateWithoutSchemaNamesInput";
            ofType: null;
          };
        };
        defaultValue: null;
      },
    ];
  };
  SchemaWhereInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "SchemaWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "schema";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "creator";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "resolver";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "revocable";
        type: { kind: "INPUT_OBJECT"; name: "BoolFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "index";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "time";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "attestations";
        type: {
          kind: "INPUT_OBJECT";
          name: "AttestationListRelationFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "schemaNames";
        type: {
          kind: "INPUT_OBJECT";
          name: "SchemaNameListRelationFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  SchemaWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "SchemaWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStat: {
    kind: "OBJECT";
    name: "ServiceStat";
    fields: {
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      value: {
        name: "value";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  ServiceStatCountAggregate: {
    kind: "OBJECT";
    name: "ServiceStatCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      value: {
        name: "value";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  ServiceStatCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStatCreateInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "value";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "value";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatGroupBy: {
    kind: "OBJECT";
    name: "ServiceStatGroupBy";
    fields: {
      _count: {
        name: "_count";
        type: {
          kind: "OBJECT";
          name: "ServiceStatCountAggregate";
          ofType: null;
        };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "ServiceStatMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "ServiceStatMinAggregate"; ofType: null };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      value: {
        name: "value";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  ServiceStatMaxAggregate: {
    kind: "OBJECT";
    name: "ServiceStatMaxAggregate";
    fields: {
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      value: {
        name: "value";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  ServiceStatMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStatMinAggregate: {
    kind: "OBJECT";
    name: "ServiceStatMinAggregate";
    fields: {
      name: {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      value: {
        name: "value";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  ServiceStatMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStatOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "ServiceStatCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "ServiceStatMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "ServiceStatMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStatScalarFieldEnum: {
    name: "ServiceStatScalarFieldEnum";
    enumValues: "name" | "value";
  };
  ServiceStatScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "value";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "value";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "value";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  ServiceStatWhereInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "ServiceStatWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "name";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "value";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ServiceStatWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "ServiceStatWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "name";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SortOrder: { name: "SortOrder"; enumValues: "asc" | "desc" };
  String: unknown;
  StringFieldUpdateOperationsInput: {
    kind: "INPUT_OBJECT";
    name: "StringFieldUpdateOperationsInput";
    isOneOf: false;
    inputFields: [
      {
        name: "set";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  StringFilter: {
    kind: "INPUT_OBJECT";
    name: "StringFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "contains";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "startsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "endsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mode";
        type: { kind: "ENUM"; name: "QueryMode"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  StringWithAggregatesFilter: {
    kind: "INPUT_OBJECT";
    name: "StringWithAggregatesFilter";
    isOneOf: false;
    inputFields: [
      {
        name: "equals";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "in";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "notIn";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        defaultValue: null;
      },
      {
        name: "lt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "lte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gt";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "gte";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "contains";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "startsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "endsWith";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "mode";
        type: { kind: "ENUM"; name: "QueryMode"; ofType: null };
        defaultValue: null;
      },
      {
        name: "not";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_count";
        type: { kind: "INPUT_OBJECT"; name: "NestedIntFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "NestedStringFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  Timestamp: {
    kind: "OBJECT";
    name: "Timestamp";
    fields: {
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      tree: {
        name: "tree";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  TimestampAvgAggregate: {
    kind: "OBJECT";
    name: "TimestampAvgAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Float"; ofType: null };
      };
    };
  };
  TimestampAvgOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampAvgOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampCountAggregate: {
    kind: "OBJECT";
    name: "TimestampCountAggregate";
    fields: {
      _all: {
        name: "_all";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      tree: {
        name: "tree";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
    };
  };
  TimestampCountOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampCountOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampCreateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampCreateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  TimestampCreateManyInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampCreateManyInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  TimestampGroupBy: {
    kind: "OBJECT";
    name: "TimestampGroupBy";
    fields: {
      _avg: {
        name: "_avg";
        type: { kind: "OBJECT"; name: "TimestampAvgAggregate"; ofType: null };
      };
      _count: {
        name: "_count";
        type: { kind: "OBJECT"; name: "TimestampCountAggregate"; ofType: null };
      };
      _max: {
        name: "_max";
        type: { kind: "OBJECT"; name: "TimestampMaxAggregate"; ofType: null };
      };
      _min: {
        name: "_min";
        type: { kind: "OBJECT"; name: "TimestampMinAggregate"; ofType: null };
      };
      _sum: {
        name: "_sum";
        type: { kind: "OBJECT"; name: "TimestampSumAggregate"; ofType: null };
      };
      from: {
        name: "from";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      timestamp: {
        name: "timestamp";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
        };
      };
      tree: {
        name: "tree";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      txid: {
        name: "txid";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  TimestampMaxAggregate: {
    kind: "OBJECT";
    name: "TimestampMaxAggregate";
    fields: {
      from: {
        name: "from";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      tree: {
        name: "tree";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  TimestampMaxOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampMaxOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampMinAggregate: {
    kind: "OBJECT";
    name: "TimestampMinAggregate";
    fields: {
      from: {
        name: "from";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      id: {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
      tree: {
        name: "tree";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
      txid: {
        name: "txid";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
      };
    };
  };
  TimestampMinOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampMinOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampOrderByWithAggregationInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampOrderByWithAggregationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "_count";
        type: {
          kind: "INPUT_OBJECT";
          name: "TimestampCountOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_avg";
        type: {
          kind: "INPUT_OBJECT";
          name: "TimestampAvgOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_max";
        type: {
          kind: "INPUT_OBJECT";
          name: "TimestampMaxOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_min";
        type: {
          kind: "INPUT_OBJECT";
          name: "TimestampMinOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "_sum";
        type: {
          kind: "INPUT_OBJECT";
          name: "TimestampSumOrderByAggregateInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  TimestampOrderByWithRelationInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampOrderByWithRelationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampScalarFieldEnum: {
    name: "TimestampScalarFieldEnum";
    enumValues: "id" | "from" | "txid" | "tree" | "timestamp";
  };
  TimestampScalarWhereWithAggregatesInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampScalarWhereWithAggregatesInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampScalarWhereWithAggregatesInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "tree";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntWithAggregatesFilter";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  TimestampSumAggregate: {
    kind: "OBJECT";
    name: "TimestampSumAggregate";
    fields: {
      timestamp: {
        name: "timestamp";
        type: { kind: "SCALAR"; name: "Int"; ofType: null };
      };
    };
  };
  TimestampSumOrderByAggregateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampSumOrderByAggregateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "timestamp";
        type: { kind: "ENUM"; name: "SortOrder"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampUpdateInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampUpdateInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "tree";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  TimestampUpdateManyMutationInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampUpdateManyMutationInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "from";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "txid";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "tree";
        type: {
          kind: "INPUT_OBJECT";
          name: "StringFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: {
          kind: "INPUT_OBJECT";
          name: "IntFieldUpdateOperationsInput";
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  TimestampWhereInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampWhereInput";
    isOneOf: false;
    inputFields: [
      {
        name: "AND";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "OR";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "NOT";
        type: {
          kind: "LIST";
          name: never;
          ofType: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "TimestampWhereInput";
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: "id";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "from";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "txid";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "tree";
        type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
        defaultValue: null;
      },
      {
        name: "timestamp";
        type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TimestampWhereUniqueInput: {
    kind: "INPUT_OBJECT";
    name: "TimestampWhereUniqueInput";
    isOneOf: false;
    inputFields: [
      {
        name: "id";
        type: { kind: "SCALAR"; name: "String"; ofType: null };
        defaultValue: null;
      },
    ];
  };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: "Query";
  mutation: "Mutation";
  subscription: never;
  types: introspection_types;
};

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
