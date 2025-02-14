"use client";

import BenefitsSection from "@/components/mint-page-components/benefits-section";
import MintSection from "@/components/mint-page-components/mint-section";
import OurImpactSection from "@/components/mint-page-components/our-impact-section";
import StayConnectedSection from "@/components/mint-page-components/stay-connected-section";

export default function MintPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <MintSection />
      <BenefitsSection />
      <OurImpactSection />
      <StayConnectedSection />
    </div>
  );
}
