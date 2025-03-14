import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/use-theme-store";
import Link from "next/link";
import {
  ArrowSquareOut,
  Butterfly,
  CalendarX,
  CaretDown,
  CurrencyCircleDollar,
  HandsClapping,
  TrendUp,
} from "phosphor-react";
import { type ReactNode, useEffect, useState } from "react";

export default function BenefitsSection() {
  const [firstDivHeight, setFirstDivHeight] = useState(0);

  useEffect(() => {
    // Function to measure the first div
    const measureFirstDiv = () => {
      const firstDiv = document.getElementById("mint-section");
      if (firstDiv) {
        const height = firstDiv.getBoundingClientRect().height;
        setFirstDivHeight(height);
      }
    };

    // Measure on mount
    measureFirstDiv();

    // Also measure on window resize
    window.addEventListener("resize", measureFirstDiv);

    // Clean up
    return () => {
      window.removeEventListener("resize", measureFirstDiv);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-fit"
        style={{ height: `calc(100dvh - ${firstDivHeight}px)` }}
      >
        <span className="text-sm md:text-xl text-disclaimer-text font-medium mb-1 mt-4 animate-pulse">
          Scroll to explore
        </span>
        <CaretDown className="text-primary mb-4 w-6 h-6 md:w-8 md:h-8 animate-bounce" />
      </div>
      <div className="w-40 h-[55px] flex flex-col justify-between items-center">
        <span className="diamond">Trusted by</span>
        <span className="text-3xl font-bold">OPTIMISM</span>
      </div>
      <div className="h-12 md:h-[58px]" />
      {/* Benefits */}
      <div className="px-4 md:px-0">
        <p className="text-xl md:text-2xl font-bold italic mb-6 md:mb-8 text-center md:text-left">
          BENEFITS FOR SUPERCHAIN BUILDERS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[744px] gap-4">
          <BenefitCard
            number={1}
            text="Driven by attestations from the Optimism Grant Council—nothing more."
            backgroundPosition="left 0% top 0%"
          />
          <BenefitCard
            number={2}
            text="Get monthly funding on Optimism, enabling stress-free building despite the 12-month OP token lock-up."
            backgroundPosition="left 40% top 0%"
          />
        </div>
        <div className="h-4" />
        <BenefitCard
          number={3}
          text="Automate the entire process from cohort membership to expiration—no gatekeepers involved."
          backgroundPosition="left 0% top 30%"
        />
      </div>
      <div className="h-16 md:h-20" />
      {/* Funding informations */}
      <div className="w-full px-4 md:px-0 md:w-[738px] flex flex-col gap-4 mb-20">
        <p className="text-xl md:text-2xl font-bold italic text-center md:text-left">
          AUTOMATED FUNDING FOR OPTIMISM BUILDERS
        </p>
        <p className="text-lg md:text-xl text-sub-text italic text-center md:text-left">
          How does it work?
        </p>
        <div className="flex flex-col w-full md:w-[738px] gap-8 md:gap-12 mb-4">
          <FundingCard
            logo={<Butterfly className="text-primary" size={32} />}
            title="Mint obUSD"
            text="Deposit a supported stablecoin to receive obUSD, a 1:1 USD-pegged token that's always redeemable."
          />
          <FundingCard
            logo={<TrendUp className="text-primary" size={32} />}
            title="Generate yield for builders"
            text="Deposited stablecoins generate yield via Aave V3, which funds projects in the Optimism Builder Dollar cohort."
          />
          <FundingCard
            logo={<HandsClapping className="text-primary" size={32} />}
            title="Optimism citizen? Endorse projects"
            text="Approved projects must secure endorsements from three badgeholders via the cohort selection page to join."
          />
          <FundingCard
            logo={<CurrencyCircleDollar className="text-primary" size={32} />}
            title="Optimism grantee? Receive yield"
            text="Once endorsed threshold is reached receive a stable monthly yield in obUSD, equally shared among all active cohort projects."
          />
          <FundingCard
            logo={<CalendarX className="text-primary" size={32} />}
            title="Cohort subscription expiration"
            text="Active cohort projects receive yield for 6 months before being ejected."
          />
        </div>
        <Link
          href="https://optimistic-usd.gitbook.io/optimistic-usd-docs"
          target="_blank"
        >
          <p className="w-full flex justify-center items-center gap-2 text-primary font-semibold text-lg md:text-xl hover:cursor-pointer hover:text-error">
            Full documentation <ArrowSquareOut weight="bold" size={24} />
          </p>
        </Link>
      </div>
    </>
  );
}

const BenefitCard = ({
  number,
  text,
  backgroundPosition,
}: {
  number: number;
  text: string;
  backgroundPosition: string;
}) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={cn(
        "w-full h-[168px] bg-content flex justify-center items-center gap-4 md:gap-6 rounded-2xl md:rounded-4xl px-4 md:px-8 py-8 md:py-12",
        { "border-[1px] border-card-border": theme === "light" },
      )}
      style={{
        backgroundImage: "url(/images/texture.png)",
        backgroundPosition,
      }}
    >
      <span className="diamond font-extrabold text-4xl md:text-6xl px-2 italic">
        {number}
      </span>
      <span className="max-w-[227px] text-sm md:text-base">{text}</span>
    </div>
  );
};

const FundingCard = ({
  logo,
  title,
  text,
}: { logo: ReactNode; title: string; text: string }) => {
  return (
    <div className="flex w-full md:w-[738px] min-h-[80px] gap-3">
      <div className="flex-shrink-0 flex justify-center items-center w-[52px] h-20 bg-primary/10 border-[1px] border-card-border rounded-[20px]">
        {logo}
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-xl md:text-2xl font-bold">{title}</p>
        <p className="text-sub-text text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};
