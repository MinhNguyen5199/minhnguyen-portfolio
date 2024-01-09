"use client";
import React, { useRef } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

type ProjectPros = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  demoLink,
  githubCode,
  tags,
  imageUrl,
}: ProjectPros) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
    >
      <div className="relative group m-3 ">
        <div>
          <Image
            src={imageUrl}
            quality={100}
            width={1000}
            height={1000}
            alt={title}
            className="aspect-square max-xl:ml-auto max-xl:mr-auto rounded-2xl w-[25rem]"
          />
        </div>
        <div className=" duration-300 inset-x-0 absolute top-0 text-xl group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 group-hover:p-2 text-black font-semibold max-[639px]:w-[25rem] max-[361px]:w-[24rem] w-[25rem] lg:left-[30%] xl:left-0 xl:w-full z-50 max-sm:h-[130%] h-[110%] xl:h-[100%] group-hover:cursor-pointer rounded-2xl max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 ">
          <div className="h-full w-full bg-gray-200 scale-0 group-hover:scale-100 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-1000 opacity-0 group-hover:opacity-100 rounded-2xl pl-2">
            <h1 className="text-center uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent py-2 decoration-8">
              {title}
            </h1>
            <p className="text-base font-mono">{description}</p>
            <div className="flex gap-2 py-2 ">
              <Link
                href={demoLink}
                target="_blank"
                className="my-auto text-blue-500 hover:underline tracking-wider"
              >
                Demo
              </Link>
              <Link
                href={githubCode}
                target="_blank"
                className="my-auto text-blue-500 hover:underline tracking-wider"
              >
                Github
              </Link>
            </div>
            <ul className="flex flex-wrap mt-4 mr-3 gap-2 sm:mt-auto absolute bottom-4">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
