import Wrapper from "../Wrapper";
// import Heading from "../sharedComponents/Heading";

const Education = () => {
  return (
    <>
      <section className="py-16">
        <Wrapper>
          <div className="text-center">
            <h2
              className={`relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['what_i_done'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4`}
            >
              My Education
            </h2>
          </div>
          {/* <Heading title={"My Education"} text={"what_i_done"} /> */}

          <div className="flex flex-col lg:flex-row -mx-3">
            <div className="max-w-full py-0 px-4 mb-6 mx-4 lg:mb-auto lg:mx-auto">
              <div className="border-2 rounded-lg shadow-xl py-8 px-6">
                <span className="text-sm text-red-600 font-semibold mb-2">
                  Nov 1, 2021
                </span>
                <h3 className="text-xl font-bold mb-1">BS Computer Science</h3>
                <h4 className="text-base italic">DHA SUFFA University</h4>
                <p className="text-base text-slate-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="max-w-full py-0 px-4 mb-6 mx-4 lg:mb-auto lg:mx-auto">
              <div className="border-2 rounded-lg shadow-xl py-8 px-6">
                <span className="text-sm text-red-600 font-semibold mb-2">
                  Sept - Dec, 2020
                </span>
                <h3 className="text-xl font-bold mb-1">Web Developement</h3>
                <h4 className="text-base italic">Aptech DHA Center</h4>
                <p className="text-base text-slate-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="max-w-full py-0 px-4 mb-6 mx-4 lg:mb-auto lg:mx-auto">
              <div className="border-2 rounded-lg shadow-xl py-8 px-6">
                <span className="text-sm text-red-600 font-semibold mb-2">
                  2018 - 2020
                </span>
                <h3 className="text-xl font-bold mb-1">
                  Intermediate (Pre-Engineering)
                </h3>
                <h4 className="text-base italic">Cadet College Petaro</h4>
                <p className="text-base text-slate-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Education;
