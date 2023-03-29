"use client";
import Wrapper from "../Wrapper";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-red-600 p-5 z-50">
        <Wrapper>
          <div className="flex justify-between items-center">
            <div className="text-white text-4xl md:text-5xl font-bold">
              <a href="#">MyPortfolio.</a>
            </div>
            <nav className="hidden md:block">
              <ul className="relative text-white text-xl font-semibold">
                <li className="inline-block before:duration-300 before:content-[''] before:absolute before:opacity-0 before:bg-white before:h-0 before:w-20 before:-bottom-6 before:-left-2 hover:before:h-1 hover:before:opacity-100">
                  <a href="#home">Home</a>
                </li>
                <li className="inline-block before:duration-300 before:content-[''] before:absolute before:opacity-0 before:bg-white before:h-0 before:w-20 before:-bottom-6 before:left-20 hover:before:h-1 hover:before:opacity-100">
                  <a href="#about" className="ml-8">
                    About
                  </a>
                </li>
                <li className="inline-block before:duration-300 before:content-[''] before:absolute before:opacity-0 before:bg-white before:h-0 before:w-20 before:-bottom-6 before:left-40 hover:before:h-1 hover:before:opacity-100">
                  <a href="#skills" className="ml-8">
                    Skills
                  </a>
                </li>
                <li className="inline-block before:duration-300 before:content-[''] before:absolute before:opacity-0 before:bg-white before:h-0 before:w-24 before:-bottom-6 before:left-[15.5rem] hover:before:h-1 hover:before:opacity-100">
                  <a href="#projects" className="ml-8">
                    Projects
                  </a>
                </li>
                <li className="inline-block before:duration-300 before:content-[''] before:absolute before:opacity-0 before:bg-white before:h-0 before:w-24 before:-bottom-6 before:left-[22rem] hover:before:h-1 hover:before:opacity-100">
                  <a href="#contact" className="ml-8">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-10 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div
              className={`${
                open ? "translate-x-0" : "translate-x-[26rem]"
              } block sm:hidden bg-black fixed -top-3.5 -ml-5 w-full duration-300`}
            >
              <div
                className="px-4 py-6 float-right duration-300"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <nav className="">
                <ul className="text-white text-xl text-center font-semibold pt-12">
                  <li className="py-4 ml-16">
                    <a
                      href="#home"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#about"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#skills"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      Skills
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#projects"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      Projects
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#contact"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
