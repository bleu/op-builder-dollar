import warpcastHoverSrc from "@/../public/icons/warpcast-hover.png";
import warpcastSrc from "@/../public/icons/warpcast.png";
import xHoverSrc from "@/../public/icons/x-hover.png";
import xLightHoverSrc from "@/../public/icons/x-light-hover.png";
import xLightSrc from "@/../public/icons/x-light.png";
import xSrc from "@/../public/icons/x.png";
import texture from "@/../public/images/texture.png";
import { useThemeStore } from "@/store/use-theme-store";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { GithubIcon } from "./icons/github";

export default function StayConnectedSection() {
  return (
    <>
      <div className="h-16 md:h-[100px]" />
      <p className="text-xl md:text-2xl font-bold italic mb-6 text-center">
        STAY CONNECTED
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0">
        <StayConnectedCardExample
          title="Inspect our"
          subtitle="Github repo"
          logoComponent={<GithubIcon width={200} height={168} />}
          link="https://github.com/BreadchainCoop/builders-dollar"
          backgroundPosition="left 0% top 0%"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="Farcaster"
          darkSrc={warpcastSrc}
          darkHoverSrc={warpcastHoverSrc}
          lightSrc={warpcastSrc}
          lightHoverSrc={warpcastHoverSrc}
          link="https://warpcast.com/optimisticusd"
          backgroundPosition="left 30% top 0%"
        />
        <StayConnectedCard
          title="Follow us on"
          subtitle="X"
          darkSrc={xSrc}
          darkHoverSrc={xHoverSrc}
          lightSrc={xLightSrc}
          lightHoverSrc={xLightHoverSrc}
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
  darkSrc,
  darkHoverSrc,
  lightSrc,
  lightHoverSrc,
  link,
  backgroundPosition,
}: {
  title: string;
  subtitle: string;
  darkSrc: StaticImageData;
  darkHoverSrc: StaticImageData;
  lightSrc: StaticImageData;
  lightHoverSrc: StaticImageData;
  link: string;
  backgroundPosition: string;
}) => {
  const { theme } = useThemeStore();
  const [isHovered, setIsHovered] = useState(false);

  const image =
    theme === "light"
      ? isHovered
        ? lightHoverSrc
        : lightSrc
      : isHovered
        ? darkHoverSrc
        : darkSrc;

  return (
    <Link
      href={link}
      target="_blank"
      className="w-[350px] h-[168px] flex justify-between bg-content rounded-4xl overflow-hidden"
      style={{ backgroundImage: `url(${texture.src})`, backgroundPosition }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pt-5 pl-5">
        <p className="text-xl font-semibold text-sub-text mb-2 whitespace-nowrap">
          {title}
        </p>
        <p className="">{subtitle}</p>
      </div>
      <Image src={image} alt={link} height={168} />
    </Link>
  );
};

const StayConnectedCardExample = ({
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
      className="w-[350px] h-[168px] flex justify-between bg-content rounded-4xl overflow-hidden group"
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
