import React from "react";
import Link from "next/link";
import { contactLink } from "@/constants";
import { motion } from "framer-motion";

function ContactBox() {
  return (
    <div className="home__des-box_contact-box">
      <Link className="text-2xl" href="/">
        Contact us
      </Link>
      <p>Mr.Sam Van Bangkok</p>
      <ContactLink />
    </div>
  );
}

const ContactLink = () => {
  return contactLink.map((item, index) => (
    <a
      className="group relative hover:text-blue-400 transition-all duration-300 ease-in-out"
      href={item.resource}
      key={index}
    >
      <span className="pb-2 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {item.display}
      </span>
    </a>
  ));
};

export default ContactBox;
