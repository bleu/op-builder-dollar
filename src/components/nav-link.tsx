import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconProps } from "phosphor-react";
import type React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ComponentType<IconProps>;
  iconClassName?: string;
}

export default function NavLink({
  href,
  icon: Icon,
  disabled,
  children,
  iconClassName,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-2 text-content-foreground opacity-50 text-lg items-center",
        !disabled &&
          !isActive &&
          "hover:text-content-foreground hover:opacity-100",
        disabled && "cursor-not-allowed opacity-30",
        isActive && "opacity-100",
      )}
    >
      {Icon && <Icon className={cn("h-6 w-6 text-primary", iconClassName)} />}
      {children}
    </Link>
  );
}
