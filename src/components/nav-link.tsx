import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconProps } from "phosphor-react";
import type React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
}

export default function NavLink({ href, icon: Icon, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-2 text-content-foreground opacity-50 hover:text-content-foreground text-lg items-center",
        isActive && "opacity-100",
      )}
    >
      {Icon && <Icon className="h-6 w-6 text-primary" />}
      {children}
    </Link>
  );
}
