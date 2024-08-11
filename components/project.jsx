"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import {  projects } from "@/utils/data";

const Project = ({project}) => {
  console.log(project)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  ">
        <h4 className="text-3xl font-bold py-5 sticky top-0 h-full">Little Project</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto place-content-center justify-center">
        {project.map(
          ({ id, title, description, img, stack, demo_url, github }, i) => (
            <div className="w-full" key={id}>
              <CardContainer className="inter-var" numberX={-10} numberY={-5}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={`https://admin-portfolio.wihant.com/${img}`} //${img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      {stack}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as={Link}
                      href={demo_url}
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Demo Url
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Project;
{
}
