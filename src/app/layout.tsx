import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
      <body className={cn(rubik.className, "bg-background text-foreground")}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
