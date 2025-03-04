import type { Metadata } from "next";
import "./globals.css";
import Content from "./Content";

export const metadata: Metadata = {
  title: "OP Builders Dollar",
  description: "Optimism Builders Dollar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/png" />
      </head>

      <Content>{children}</Content>
    </html>
  );
}
