"use client";

import { LineIcon, PhoneIcon, WhatsappIcon } from "@/icons/Icon";
import Logo from "./Logo";
import Nav from "./Nav";
import Contact from "./Contact";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  const [isFullPage, setIsFullPage] = useState(false);

  // Declare function for set header color
  const scrollYPos = () => {
    window.scrollY > 50 ? setIsFullPage(true) : setIsFullPage(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollYPos);

    // Remove Event listener
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        isFullPage
          ? "bg-blue-300 sticky top-0 shadow-lg"
          : "bg-transparent py-6"
      }  sticky top-0 z-40 gap-10 pt-2 md:py-8 transition-colors duration-200`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* ์ Navigation bar */}
        <Nav />

        {/* Mobile Navigation bar */}
        <div className="lg:hidden block pr-5">
          <MobileNav />
        </div>

        {/* Langauge switcher */}
        <div className="lg:block hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
