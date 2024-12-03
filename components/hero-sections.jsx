"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-backgrounds";
import Idcard from "./ui/Idcard";

export const HeroSection = ({ text }) => {
  const download = () => {
    const pdfUrl = "https://drive.google.com/file/d/1f6xvZ7X2ONdlYBKmSMMaDc8U5mdqbTQ_/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Bagas Wihantoro CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <AuroraBackground
      className={
        "flex min-h-screen max-lg:flex-col items-center lg:justify-center text-slate-50 transition-bg max-w-7xl"
      }
    >
      <Idcard />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold  text-center">
          {text.title_id}
        </div>
        <div className="font-extralight text-base md:text-4xl  py-4">
          {text.sub_title_id}
        </div>
        <button className="bg-black  rounded-full w-fit text-white  px-4 py-2" onClick={download}>
          {text.small_sub_title_id}
        </button>
      </motion.div>
    </AuroraBackground>
  );
};
