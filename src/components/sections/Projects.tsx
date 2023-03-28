import Wrapper from "../Wrapper";
import Image from "next/image";
import NextJSBlog from "../../../public/projects/nextjsblog.png";
import PanaverseDAO from "../../../public/projects/panaversedao.png";
import SudokuGame from "../../../public/projects/sudokugame.png";
import FiverLandingPage from "../../../public/projects/fiverrLanding.png";
import TicTacToeGame from "../../../public/projects/tictactoe.png";
import CafeStreet from "../../../public/projects/cafestreet.png";
const Projects = () => {
  return (
    <section className="px-4 py-10" id="projects">
      <Wrapper>
        <div className="text-center">
          <h2
            className={`relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['what_i_done'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4`}
          >
            Projects
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
          <div className="rounded-lg shadow-xl w-full lg:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={NextJSBlog}
                alt="Next JS Blog"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a
                  href="https://nextjs-blog-rho-vert-85.vercel.app/"
                  target="_blank"
                >
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">Next JS Blog</p>
              <ul className="list-disc ml-5">
                <li>Next JS</li>
                <li>Typescript</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xl w-full md:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={PanaverseDAO}
                alt="Panaverse Dao"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a
                  href="https://panaverse-dao-website-saadbutt27.vercel.app/"
                  target="_blank"
                >
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">
                Panaverse DAO Website
              </p>
              <ul className="list-disc ml-5">
                <li>Next JS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xl w-full md:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={SudokuGame}
                alt="Sudoku Game"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a href="https://saadbutt27.github.io/Sudoku/" target="_blank">
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">
                Sudoku Game (DSA Group Project)
              </p>
              <ul className="list-disc ml-5">
                <li>HTML</li>
                <li>Typescript</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xl w-full md:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={FiverLandingPage}
                alt="Fiverr Landing Page"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a
                  href="https://saadbutt27.github.io/Aptech%20Project/"
                  target="_blank"
                >
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">
                Fiverr Landing Page
              </p>
              <ul className="list-disc ml-5">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xl w-full md:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={TicTacToeGame}
                alt="Tic Tac Toe Game"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a href="https://saadbutt27.github.io/game/" target="_blank">
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">
                Tic Tac Toe Game
              </p>
              <ul className="list-disc ml-5">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xl w-full md:w-[24rem] select-none mb-10">
            <div className="group relative rounded-md cursor-pointer px-4 py-2">
              <Image
                src={CafeStreet}
                alt="Cafe Street"
                height={200}
                width={300}
                className="rounded-md duration-300 group-hover:-translate-y-6 w-full"
              />
              <span className="capitalize text-base font-semibold text-red-600 duration-300 absolute -bottom-1 ml-2 mb-2 -translate-y-1 -z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10">
                <a
                  href="https://saadbutt27.github.io/Cafe%20Street/"
                  target="_blank"
                >
                  view project
                </a>
              </span>
            </div>
            <div className="mt-2 mb-4 mx-4">
              <p className="text-lg  text-black font-semibold">Cafe Street</p>
              <ul className="list-disc ml-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>Figma Template</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
