"use client";

import { useThemeStore } from "@/store/useThemeStore";
import Link from "next/link";
import {
  ArrowsDownUp,
  Butterfly,
  Gift,
  List,
  Moon,
  Sun,
  UsersThree,
} from "phosphor-react";
import { useState } from "react";
import { ConnectWalletButton } from "./connect-wallet-button";
import LogoComponent from "./logo";
import NavLink from "./nav-link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const themeButtonStyle =
  "py-2 pl-3 hover:bg-secondary/10 flex-1 w-full items-center justify-start text-lg";

const isWindow = typeof window !== "undefined";

const isMobile = isWindow ? window.innerWidth <= 1200 : undefined;

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
        <LogoComponent className="text-primary" />
        <h1 className="text-content-foreground font-bold text-lg font-roboto-mono text-center">
          obUSD
        </h1>
      </Link>
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 md:gap-4 lg:gap-7 text-lg">
        <NavLink href="/" icon={Butterfly}>
          Mint
        </NavLink>
        <NavLink href="/yield" icon={ArrowsDownUp}>
          Yield {!isMobile && "distribution"}
        </NavLink>
        <NavLink href="/cohort-selection" icon={UsersThree}>
          Cohort {!isMobile && "selection"}
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <ConnectWalletButton />
        <Popover>
          <PopoverTrigger>
            <List size={24} className="md:hidden text-primary" />
          </PopoverTrigger>
          <PopoverContent className="mr-5" sideOffset={20} side="top">
            <div className="flex flex-col items-start gap-4">
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
              <span className="text-2xl font-bold mt-6">Theme</span>
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
            </div>
          </PopoverContent>
        </Popover>

        <div
          className="relative hidden md:flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              className="flex items-center justify-center rounded-full bg-primary/10 p-1 w-8 h-8 focus:outline-none"
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
