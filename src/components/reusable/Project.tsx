import React from "react";
import Image from "next/image";

import { ProjectT } from "../../lib/types";

export default function Project({ project }: { project: ProjectT }) {
  return (
    <div className="rounded-lg shadow-xl w-full lg:w-[24rem] select-none mb-10">
      <div className="group relative rounded-md cursor-pointer px-4 py-2">
        <Image
          src={project.imgSrc}
          alt={project.altText}
          height={200}
          width={300}
          className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
        />
        <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
          <a href={project.href} target="_blank">
            view project
          </a>
        </span>
      </div>
      <div className="mt-2 mb-4 mx-4">
        <p className="text-lg  text-black font-semibold">{project.title}</p>
        <ul
          className={`grid list-disc ml-5 ${
            project.techStack.length > 3 ? `grid-cols-2` : `grid-cols-1 `
          }`}
        >
          {project.techStack.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
