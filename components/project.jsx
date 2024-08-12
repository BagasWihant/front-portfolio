"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/tooltip";

const Project = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center max-md:px-7">
      <h4 className="text-3xl font-bold py-5 sticky top-0 h-full">
        Little Project
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto place-content-center justify-center">
        {project.map(
          ({ id, name, description, img, stacks, demo_url, github_url }, i) => (
            <div className="w-full" key={id}>
              <CardContainer className="inter-var" numberX={-10} numberY={-5}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {name}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={5}
                    rotateZ={-5}
                    className="w-full mt-4"
                  >
                    <Image
                      src={`https://admin-portfolio.wihant.com/storage/${img}`}
                      // fill={true}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      loading="eager"
                    />
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {description}
                  </CardItem>
                  {/* <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-4 rounded-xl text-xs font-normal dark:text-white"
                    >
                    </CardItem>  */}
                  <div className="flex flex-row items-center justify-center w-full my-3 z-50">
                    <AnimatedTooltip key={id} items={stacks} />
                  </div>
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    className="flex w-full justify-center gap-5 items-center"
                  >
                      {demo_url !== "-" && (
                        <CardItem
                          translateZ={20}
                          translateX={40}
                          as={Link}
                          href={demo_url}
                          className="p-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Demo
                        </CardItem>
                      )}
                      {github_url !== "-" && (
                        <CardItem
                          translateZ={20}
                          translateX={40}
                          as={Link}
                          href={github_url}
                          className="p-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Github
                        </CardItem>
                      )}
                  </CardItem>
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
