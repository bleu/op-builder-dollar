# Optimistic Builder Dollar

This app is the frontend of the Optimistic Builder Dollar project, allowing obUSD minting and burning, project endorsements, and making cohort projects public.

Full project documentation is accessible [here](https://optimistic-usd.gitbook.io/optimistic-usd-docs). The app interacts with [BuildersManager](https://github.com/BreadchainCoop/builders-dollar) and [BuildersDollar](https://github.com/BreadchainCoop/builders-dollar-token) contracts.


## Getting Started

To run the development server:

```bash
pnpm install
pnpm dev
```

## Update configs

The project has hardcoded constants at `src/utils/constants.ts`, such as:

- USDC address
- obUSD address
- BuildersManager contract address
- Pool address
- Citizen schema UID
- Projects schema UID
- Cohort membership duration after endorsement

Make sure they match the deployed contracts variables for production.

## Dune integration

The app needs to access two Dune Analytics queries in order to fetch all data: stats query and new members query. Both are available at `/dune_queries` folder. Note they also have harcoded addresses to be set.

The Dune API key and the queries IDs must be provided as environment variables, following `/env.example` format.
