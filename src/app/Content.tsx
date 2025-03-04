"use client";

import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Providers } from "@/providers";
import { Rubik } from "next/font/google";
import { type ReactNode, useEffect, useState } from "react";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Content({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <body className={`${rubik.className} bg-background text-foreground`}>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </body>
  );
}
