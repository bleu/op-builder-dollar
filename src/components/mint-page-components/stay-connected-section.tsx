import texture from "@/../public/images/texture.png";
import Link from "next/link";
import type { ReactNode } from "react";
import { GithubIcon } from "./icons/github";
import { WarpcastIcon } from "./icons/warpcast";
import { XIcon } from "./icons/x";

export default function StayConnectedSection() {
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
          logoComponent={<GithubIcon width={200} height={200} />}
          link="https://github.com/BreadchainCoop/builders-dollar"
          backgroundPosition="left 0% top 0%"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="Farcaster"
          logoComponent={<WarpcastIcon width={200} height={200} />}
          link="https://warpcast.com/optimisticusd"
          backgroundPosition="left 30% top 0%"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="X"
          logoComponent={<XIcon width={200} height={200} />}
          link="https://x.com/optimisticUSD"
          backgroundPosition="left 60% top 0%"
        />
      </div>
      <div className="h-16 md:h-[100px]" />
    </>
  );
}

const StayConnectedCard = ({
  title,
  subtitle,
  logoComponent,
  link,
  backgroundPosition,
}: {
  title: string;
  subtitle: string;
  logoComponent: ReactNode;
  link: string;
  backgroundPosition: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-[350px] h-[168px] flex justify-between bg-content rounded-4xl overflow-hidden group border border-card-border"
      style={{ backgroundImage: `url(${texture.src})`, backgroundPosition }}
    >
      <div className="pt-5 pl-5">
        <p className="text-xl font-semibold text-sub-text mb-2 whitespace-nowrap">
          {title}
        </p>
        <p className="">{subtitle}</p>
      </div>
      {logoComponent}
    </Link>
  );
};
