"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface IMainNavProps {
  data: Category[];
}

const MainNav: React.FC<IMainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-4 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
