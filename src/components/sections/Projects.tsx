import Wrapper from "../Wrapper";
import Image from "next/image";
import NextJSBlog from "../../../public/projects/nextjsblog.png";
import PanaverseDAO from "../../../public/projects/panaversedao.png";
import SudokuGame from "../../../public/projects/sudokugame.png";
import FiverLandingPage from "../../../public/projects/fiverrLanding.png";
import TicTacToeGame from "../../../public/projects/tictactoe.png";
import CafeStreet from "../../../public/projects/cafestreet.png";

import { Projects as MyProjects } from "../../lib/projects";
import Project from "../reusable/Project";

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
          {MyProjects.map((projectItem, index) => (
            <Project key={index} project={projectItem} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
