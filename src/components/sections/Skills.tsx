import Link from "next/link";
import Wrapper from "../Wrapper";
import Button from "../sharedComponents/Button";
const About = () => {
  return (
    <>
      <section className="py-24">
        <Wrapper>
          <div className="text-center">
            <h2 className="relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['what_i_know'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4">
              My Skills
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-[50%] flex flex-col items-center my-0 mx-[40px] lg:my-auto">
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">HTML</span>
                        <span className="text-lg font-semibold">90%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[80%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">CSS</span>
                        <span className="text-lg font-semibold">70%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[70%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">Javascript</span>
                        <span className="text-lg font-semibold">75%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[75%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">C,C++</span>
                        <span className="text-lg font-semibold">70%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[70%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">JAVA</span>
                        <span className="text-lg font-semibold">60%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[60%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
            </div>
            {/* <div className="w-[100%] lg:w-[50%] flex flex-col items-center my-0 mx-[40px] lg:my-auto">
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">HTML</span>
                        <span className="text-lg font-semibold">90%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[80%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">CSS</span>
                        <span className="text-lg font-semibold">70%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[70%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">Javascript</span>
                        <span className="text-lg font-semibold">75%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[75%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">C,C++</span>
                        <span className="text-lg font-semibold">70%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[70%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-semibold">JAVA</span>
                        <span className="text-lg font-semibold">60%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[60%] before:left-0 before:top-0 before:bg-red-600"></div>
                </div>
            </div> */}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;