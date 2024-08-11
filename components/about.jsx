"use client";

import Image from "next/image";
import React from "react";
import { CardBorder } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Meteors } from "./ui/meteor";

export const About = ({text}) => {
  const words = [
    "Hello i'am Bagas Wihantoro.",
    "I live in Boyolali.",
  ];
  return (
    <>
      <div className="h-screen flex justify-center items-center max-w-7xl">
        <CardBorder
          duration={8651}
          containerClassName="w-full"
          borderRadius=".75rem"
          borderClassName="h-[430px] w-[430px] opacity-[0.8] bg-[radial-gradient(var(--purple-500)_1%,transparent_80%)]"
          ukuran="5%"
          className=" dark:bg-slate-900/45 backdrop-blur text-black dark:text-white border-neutral-200 dark:border-slate-800  p-5"
        >
          <p className="text-3xl pb-2 font-bold">About Me</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex items-center px-4">
              <div className="font-normal text-start text-neutral-600 dark:text-neutral-400">
                <FlipWords className="md:text-4xl text-2xl" words={words} /> <br />
                <span className="text-lg">
                  {text.description_id}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* <Meteors number={30} className="" /> */}
              <CardContainer className="inter-var"
                numberX={2} numberY={2}>
                <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto   ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="/image.jpg"
                      priority
                      style={{
                        borderRadius: "1.75rem",
                        width: "100%",
                        height: "auto",
                      }}
                      width={500}
                      height={300}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl z-10"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </CardBorder>
      </div>
    </>
  );
}
