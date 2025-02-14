"use client";
import githubSrc from "@/../public/icons/github.png";
import warpcastSrc from "@/../public/icons/warpcast.png";
import xSrc from "@/../public/icons/x.png";
import texture from "@/../public/images/texture.png";
import MintBurn from "@/components/MintBurn";
import ObUsd from "@/components/ui/obusd";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/useThemeStore";
import Image, { type StaticImageData } from "next/image";
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
import type { ReactNode } from "react";

export default function MintPage() {
  const { theme } = useThemeStore();

  const lightBorderClass = cn({
    "border-[1px] border-card-border": theme === "light",
  });

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div
        className="flex flex-col w-full justify-center items-center bg-cover pt-16 md:pt-32 px-4 md:px-0 rounded-b-[30px] md:rounded-b-[60px] border-b-[1px] border-card-border"
        style={{ backgroundImage: `url(${texture.src})` }}
      >
        <h1 className="text-center italic font-bold text-xl md:text-2xl mt-5 px-4">
          OPTIMISTIC BUILDER DOLLAR
        </h1>
        <h2 className="text-center text-sub-text italic mb-4 px-4 text-sm md:text-base">
          Mint obUSD to generate funds for builder grantees of Optimism
        </h2>
        <MintBurn />
        <div className="h-8 md:h-16" />
        <div className="w-full md:w-[636px] flex flex-col md:flex-row gap-4 md:gap-6">
          <div
            className={cn(
              "w-full md:w-[306px] h-[89px] bg-content rounded-2xl md:rounded-4xl px-4 md:px-8 py-4 shadow-lg",
              lightBorderClass,
            )}
          >
            <span className="font-normal text-sub-text">
              Total obUSD minted
            </span>
            <div className="flex w-fit justify-center items-center gap-2">
              <ObUsd size={24} />
              <span className="text-2xl font-bold">0.0</span>
            </div>
          </div>
          <div
            className={cn(
              "flex flex-col w-full md:w-[306px] h-[89px] bg-content rounded-2xl md:rounded-4xl px-4 md:px-8 py-4 shadow-lg",
              lightBorderClass,
            )}
          >
            <span className="font-normal text-sub-text whitespace-nowrap">
              Total superchain builders funded
            </span>
            <span className="text-2xl font-bold">100</span>
          </div>
        </div>
        <div className="h-8 md:h-[58px]" />
      </div>
      <div className="h-6" />
      <span className="text-sm text-disclaimer-text font-medium mb-1">
        Scroll to explore
      </span>
      <CaretDown className="text-primary" size={24} />
      <div className="h-4" />
      <div className="grid grid-cols-2 w-[400px]">
        <div className="w-40 h-[55px] flex flex-col justify-between ml-4">
          <span className="diamond">Trusted by</span>
          <span className="text-3xl font-bold">OPTIMISM</span>
        </div>
        <div className="w-32 h-[55px] ml-10 flex flex-col justify-between">
          <span className="diamond">Audited by</span>
          <span className="text-3xl font-bold">xyz firm</span>
        </div>
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
          />
          <BenefitCard
            number={2}
            text="Get monthly funding on Optimism, enabling stress-free building despite the 12-month OP token lock-up."
          />
        </div>
        <div className="h-4" />
        <BenefitCard
          number={3}
          text="Automate the entire process from cohort membership to expiration—no gatekeepers involved."
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
        <p className="w-full flex justify-center items-center gap-2 text-primary font-semibold text-lg md:text-xl hover:cursor-pointer hover:text-error">
          Full documentation <ArrowSquareOut weight="bold" size={24} />
        </p>
      </div>
      {/* Our impact */}
      <div
        className="flex flex-col w-full justify-center items-center bg-cover pt-16 md:pt-32 rounded-[30px] md:rounded-[60px] border-b-[1px] border-t-[1px] border-card-border"
        style={{ backgroundImage: `url(${texture.src})` }}
      >
        <div className="flex flex-col py-12 md:py-20 gap-4 w-full px-4 md:px-0 md:w-[738px]">
          <p className="text-xl md:text-2xl font-bold italic mb-2 text-center md:text-left">
            OUR IMPACT
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full md:w-[738px] gap-4">
            <ImpactCard
              title="Total yield generated overtime"
              content={
                <span className="text-3xl md:text-4xl text-success font-bold italic">
                  $40,678.56
                </span>
              }
              className="bg-card-bg"
            />
            <ImpactCard
              title="Total teams funded"
              content={
                <span className="text-3xl md:text-4xl font-bold italic">
                  300
                </span>
              }
              className={lightBorderClass}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full md:w-[738px] gap-4">
            <ImpactCard
              title="Current APY"
              content={
                <span className="text-3xl md:text-4xl font-bold italic">
                  4.5%
                </span>
              }
              className={lightBorderClass}
            />
            <ImpactCard
              title="Total obUSD minted"
              content={
                <div className="flex gap-2">
                  <ObUsd size={32} />
                  <span className="text-3xl md:text-4xl font-bold italic">
                    2,000,010.87
                  </span>
                </div>
              }
              className={lightBorderClass}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full md:w-[738px] gap-4">
            <ImpactCard
              title="Total users"
              content={
                <span className="text-3xl md:text-4xl font-bold italic">
                  2,000
                </span>
              }
              className={lightBorderClass}
            />
            <ImpactCard
              title="Total obUSD transactions"
              content={
                <span className="text-3xl md:text-4xl font-bold italic">
                  20,000,010
                </span>
              }
              className={lightBorderClass}
            />
          </div>
        </div>
      </div>
      <StayConnected />
    </div>
  );
}

const BenefitCard = ({ number, text }: { number: number; text: string }) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={cn(
        "w-full h-[168px] bg-content flex justify-center items-center gap-4 md:gap-6 rounded-2xl md:rounded-4xl px-4 md:px-8 py-8 md:py-12",
        { "border-[1px] border-card-border": theme === "light" },
      )}
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

const ImpactCard = ({
  title,
  content,
  className,
}: { title: string; content: ReactNode; className?: string }) => {
  return (
    <div className="h-[168px]">
      <div
        className={cn(
          "w-full h-[168px] bg-content flex justify-center items-center gap-6 rounded-2xl md:rounded-3xl px-4 md:px-8 py-8 md:py-12",
          className,
        )}
      >
        {content}
      </div>
      <span className="max-w-[227px] relative top-[-148px] left-6 text-sub-text text-sm md:text-base">
        {title}
      </span>
    </div>
  );
};

const StayConnected = () => {
  return (
    <>
      <div className="h-16 md:h-[100px]" />
      <p className="text-xl md:text-2xl font-bold italic mb-6 text-center">
        STAY CONNECTED
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0">
        <StayConnectedCard
          title="Inspect our"
          subtitle="Github repo"
          image={githubSrc}
          link="https://github.com/BreadchainCoop/builders-dollar"
          className="bg-[right_100%_top_45%]"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="Farcaster"
          image={warpcastSrc}
          link="https://warpcast.com/optimisticusd"
          className="bg-[left_0%_top_0%]"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="X"
          image={xSrc}
          link="https://x.com/optimisticUSD"
          className="bg-[left_60%_top_55%]"
        />
      </div>
      <div className="h-16 md:h-[100px]" />
    </>
  );
};

const StayConnectedCard = ({
  title,
  subtitle,
  image,
  link,
  className,
}: {
  title: string;
  subtitle: string;
  image: StaticImageData;
  link: string;
  className?: string;
}) => {
  const { theme } = useThemeStore();

  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "w-[350px] h-[168px] flex justify-between bg-content rounded-4xl",
        className,
        { "bg-[#191919] text-white": theme === "light" },
      )}
      style={{ backgroundImage: `url(${texture.src})` }}
    >
      <div className="pt-5 pl-5">
        <p className="text-xl font-semibold text-sub-text mb-2">{title}</p>
        <p className="">{subtitle}</p>
      </div>
      <Image src={image} alt={link} height={168} />
    </Link>
  );
};
