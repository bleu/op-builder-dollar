import Link from "next/link";
import LogoComponent from "./logo";

const linkSections = [
  {
    title: "Navigation",
    links: [
      { name: "Mint obUSD", href: "/" },
      { name: "Yield distribution", href: "/yield" },
      { name: "Cohort creation", href: "/cohort-selection" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "X", href: "https://twitter.com" },
      { name: "Farcaster", href: "https://discord.com" },
    ],
  },
  {
    title: "Docs",
    links: [
      { name: "Github", href: "https://github.com" },
      { name: "Gitbook", href: "https://gitbook.com" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center p-8 bg-card-bg-1 rounded-t-[30px]">
      <div className="flex flex-col gap-1">
        <LogoComponent className="text-primary" />
        <span className="italic font-semibold text-xl">
          Optimistic Builder USD
        </span>
        <span className="text-lg text-sub-text">All yield to OP builders.</span>
      </div>
      <div className="flex flex-row gap-8 items-start">
        {linkSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h4 className="text-sub-text font-bold">{section.title}</h4>
            <div className="flex flex-col gap-2">
              {section.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <span className="font-medium text-sm">A Breadchain co-op product</span>
    </footer>
  );
};
