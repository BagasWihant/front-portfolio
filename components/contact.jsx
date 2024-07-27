"use client";
// import React from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@nextui-org/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle
} from "@tabler/icons-react";
import { CardBorder } from "./ui/moving-border";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center">

      <CardBorder
        duration={5068}
        containerClassName="w-full"
        borderRadius=".75rem"
        ukuran="5%"
        borderClassName="h-96 w-96 opacity-[0.8] bg-[radial-gradient(var(--blue-700)_10%,transparent_80%)]"
        className=" dark:bg-slate-900/45 backdrop-blur text-black dark:text-white border-neutral-200 dark:border-slate-800  p-5"
      >

        {/* <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input "> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <form className="" onSubmit={handleSubmit}>
            <h2 className="font-bold text-xl text-center text-neutral-200">
              Welcome to Aceternity
            </h2>
            <p className=" text-sm mt-2 text-center text-neutral-300">
              Login to aceternity if you can because we don&apos;t have a login flow
              yet
            </p>
            <div className="bg-gradient-to-r from-transparent via-blue-300 to-transparent my-8 h-[2px] w-full" />

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              {/* <Label htmlFor="text">text Address</Label> */}
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className="w-full bg-zinc-800 text-white rounded-md"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </form>

          <div>
            <h2 className="font-bold text-xl text-center text-neutral-200">
              Welcome to Aceternity
            </h2>
            <p className=" text-sm mt-2 text-center text-neutral-300">
              Login to aceternity if you can because we don&apos;t have a login flow
              yet
            </p>
            <div className="bg-gradient-to-r from-transparent via-blue-300 to-transparent my-8 h-[2px] w-full" />
            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </CardBorder>

    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
};
export default Contact;
