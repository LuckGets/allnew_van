"use client";

import { LineIcon, PhoneIcon, WhatsappIcon } from "@/icons/Icon";
import Logo from "./Logo";
import Nav from "./Nav";
import Contact from "./Contact";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
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
          : "bg-transparent absolute w-full py-6"
      } z-40 gap-10 pt-2 md:p-8 transition-colors duration-200`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <Nav />
        <div className="md:hidden block pr-5">
          <MobileNav />
        </div>
        <div className="md:block hidden">
          <Contact />
        </div>
      </div>
    </header>
  );
}
