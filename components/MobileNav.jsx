"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@/icons/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLink } from "@/constants";

export default function MobileNav() {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-10 p-2 rounded-full cursor-pointer hover:bg-slate-200 hover:scale-105 transition-all duration-200">
          <HamburgerMenuIcon />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10">
        {navbarLink.map((item) => (
          <Link href={item.href}>{item.name}</Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
