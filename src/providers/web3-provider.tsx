"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import type { ReactNode } from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { http, WagmiProvider, createConfig } from "wagmi";
import { mainnet, optimism, sepolia } from "wagmi/chains";

const walletConnectProjectId = "";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [optimism, mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [optimism.id]: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL
        ? http(process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL)
        : http("https://mainnet.optimism.io"),
      [sepolia.id]: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
        ? http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL)
        : http("https://sepolia.gateway.tenderly.co"),
    },

    // Required API Keys
    walletConnectProjectId,

    // Required App Info
    appName: "Optimism Builders Dollar",
    // Optional App Info
    appDescription: "Optimism Builders Dollar",
    appUrl: "https://op-builder-dollar.vercel.app",
    appIcon: "",
  }),
);

const graphqlClient = new Client({
  url: "https://optimism.easscan.org/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Provider value={graphqlClient}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
        </Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
