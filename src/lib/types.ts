import { StaticImageData } from "next/image";

export type ProjectT = {
    imgSrc: StaticImageData | string;
    altText: string;
    href: string;
    title: string;
    techStack: string[];
  };