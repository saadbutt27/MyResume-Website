import Link from "next/link";
import Wrapper from "../Wrapper";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-red-600 p-4 z-50">
        <Wrapper>
          <div className="flex justify-between items-center">
            <div className=" text-white text-4xl md:text-5xl font-bold">MyPortfolio.</div>
            <nav className=" hidden md:block">
              <ul className="inline-flex text-white text-xl font-semibold">
                <li>
                  <Link href={"#"} className="ml-8">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"#about"} className="ml-8">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="ml-8">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="ml-8">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="ml-8">
                    Contact
                  </Link>
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
