"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ArrowsDownUp, Butterfly, Gift, UsersThree } from "phosphor-react";
import { ConnectWalletButton } from "./connect-wallet-button";
import NavLink from "./nav-link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
const themeButtonStyle =
  "py-2 pl-3 hover:bg-secondary/10 flex-1 w-full items-center justify-start";
const Header = () => {
  const { setTheme, theme } = useThemeStore();

  return (
    <header className="flex relative h-14 items-center justify-between bg-content mx-5 mt-6 px-5 rounded-3xl shadow-lg ">
      <Link href="/">
        <h1 className="text-primary font-bold text-lg font-roboto-mono text-center">
          Bleu
        </h1>
      </Link>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-7 text-lg">
        <NavLink href="/" icon={Butterfly}>
          Mint
        </NavLink>
        <NavLink href="/yield" icon={ArrowsDownUp}>
          Yield distribution
        </NavLink>
        <NavLink href="/cohort-selection" icon={UsersThree}>
          Cohort selection
        </NavLink>
        <NavLink href="/rewards" icon={Gift}>
          Rewards
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <ConnectWalletButton />
        <Popover>
          <PopoverTrigger className="flex items-center justify-center rounded-full bg-primary/10 p-1 w-8 h-8 ">
            {theme === "light" ? (
              <Sun size={18} className="text-primary" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </PopoverTrigger>
          <PopoverContent className="px-6 py-3 border border-card-border bg-content flex flex-col items-start mt-5 mr-5">
            <span className="text-2xl font-bold">Theme</span>
            <p className="text-base text-sub-text mb-2">
              Select your preference
            </p>
            <Button
              variant="ghost"
              onClick={() => setTheme("light")}
              className={themeButtonStyle}
            >
              <Sun size={18} className="text-primary" />
              Light
            </Button>
            <Button
              variant="ghost"
              onClick={() => setTheme("dark")}
              className={themeButtonStyle}
            >
              <Moon size={18} className="text-primary" />
              Dark
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
