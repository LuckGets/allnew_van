"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@/icons/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLink } from "@/constants";
import Contact from "./Contact";
import Logo from "./Logo";

export default function MobileNav() {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-10 p-2 rounded-full cursor-pointer hover:bg-slate-200 hover:scale-110 transition-all duration-200">
          <HamburgerMenuIcon />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10">
        {/* LOGO */}
        <Logo />

        {/* Nav bar */}
        {navbarLink.map((item) => (
          <Link
            className="group relative hover:text-blue-400 transition-all duration-300 ease-in-out"
            href={item.href}
          >
            <span className="pb-2 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {item.name}
            </span>
          </Link>
        ))}

        {/* Contact */}
        <Contact />
      </SheetContent>
    </Sheet>
  );
}
