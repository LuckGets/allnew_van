"use client"
import React from "react";
import Contact from "./Contact";
import useLangContext from "@/hooks/useLangContext";
import {enResources,thResources} from "@/constants/text"

function Description() {

  const {language} = useLangContext()

  return (
    <div className="bg-white w-full">
      <div className="home__des-box flex-col md:flex justify-center items-center">
        <div>
          <h1>VIP Van Transport Service</h1>
          <p>
           {language === "en" ?  `${enResources.description}` : `${thResources.description}`}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Description;
