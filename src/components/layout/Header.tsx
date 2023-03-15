import Link from "next/link";
import Wrapper from "../Wrapper";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-red-600 p-4 z-50">
        <Wrapper>
          <div className="flex justify-between items-center">
            <div className=" text-white text-4xl md:text-5xl font-bold">
              MyPortfolio.
            </div>
            <nav className=" hidden md:block">
              <ul className="inline-flex text-white text-xl font-semibold">
                <li>
                  <a href="#home" className="ml-8">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="ml-8">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="ml-8">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="ml-8">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="ml-8">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
