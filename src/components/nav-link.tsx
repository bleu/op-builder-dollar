import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function NavLink({ href, icon, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-2 text-content-foreground/50 hover:text-content-foreground text-lg",
        isActive && "text-content-foreground",
      )}
    >
      <Users className="h-6 w-6 text-primary" />
      {children}
    </Link>
  );
}
