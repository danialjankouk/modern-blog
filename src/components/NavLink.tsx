"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
};

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "text-primary-100",
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname() || "/";
  const isActive = exact
    ? pathname === href
    : pathname === href ||
      pathname.startsWith(href === "/" ? href : href + "/");

  const combined = `${className} ${isActive ? activeClassName : ""}`.trim();

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
