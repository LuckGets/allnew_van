"use client";
import React, { useState } from "react";
import useLangContext from "@/hooks/useLangContext";
import { enResources, thResources } from "@/constants/text";
import ContactBox from "./ContactBox";
import { Button } from "./ui/button";

function Description() {
  const { language } = useLangContext();

  return (
    <div className="home__des-box flex-col md:flex justify-center items-center">
      <div className="w-[80%]">
        <h1>VIP Van Transport Service</h1>
        <p>
          {language === "en"
            ? `${enResources.description}`
            : `${thResources.description}`}
        </p>
      </div>
      <div className="flex-shrink-0">
        <ContactBox />
      </div>
    </div>
  );
}

export default Description;
