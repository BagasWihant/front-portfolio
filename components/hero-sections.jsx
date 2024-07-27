"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-backgrounds";
import Idcard from "./ui/Idcard";

export function HeroSection() {
  return (
    <AuroraBackground 
    className={"flex min-h-screen max-lg:flex-col items-center lg:justify-center text-slate-50 transition-bg max-w-7xl"}>
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
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl  py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black  rounded-full w-fit text-white  px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
