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
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavLink({
  href,
  icon: Icon,
  disabled,
  children,
  iconClassName,
  onLinkClick,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onLinkClick) {
      onLinkClick(e);
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
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
