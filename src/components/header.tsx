"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowsDownUp, Butterfly, Gift, UsersThree } from "phosphor-react";
import { useState } from "react";
import logo from "../../public/icons/logo.svg";
import { ConnectWalletButton } from "./connect-wallet-button";
import NavLink from "./nav-link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const themeButtonStyle =
  "py-2 pl-3 hover:bg-secondary/10 flex-1 w-full items-center justify-start";

const Header = () => {
  const { setTheme, theme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <header className="flex relative h-14 items-center justify-between bg-content mx-5 mt-6 px-5 rounded-3xl shadow-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="obusd logo" />
        <h1 className="text-content-foreground font-bold text-lg font-roboto-mono text-center">
          obUSD
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
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              className="flex items-center justify-center rounded-full bg-primary/10 p-1 w-8 h-8"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {theme === "light" ? (
                <Sun size={18} className="text-primary" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </PopoverTrigger>
            {/* Invisible connector between trigger and content to keep the hover functionallity working */}
            {open && (
              <div className="absolute w-full h-6 bottom-0 translate-y-full" />
            )}
            <PopoverContent
              className="px-6 py-3 border border-card-border bg-content flex flex-col items-start mt-5 mr-5"
              sideOffset={5}
            >
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
      </div>
    </header>
  );
};

export default Header;
