import Link from "next/link";
import Wrapper from "../Wrapper";
import Button from "../sharedComponents/Button";
import MySkill from "../sharedComponents/Skill";
const About = () => {
  return (
    <>
      <section className="py-10">
        <Wrapper>
          <div className="text-center">
            <h2 className="relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['what_i_know'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4">
              My Skills
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-[50%] flex flex-col items-center my-0 mx-[40px] lg:block lg:my-auto">
                <MySkill skill={"HTML"} strength={"80%"}/>
                <MySkill skill={"CSS"} strength={"70%"}/>
                <MySkill skill={"Javascript"} strength={"75%"}/>
                <MySkill skill={"Typescript"} strength={"60%"}/>
                <MySkill skill={"C,C++"} strength={"70%"}/>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col items-center my-0 mx-[40px] lg:block lg:my-auto">
                <MySkill skill={"JAVA"} strength={"60%"}/>
                <MySkill skill={"React"} strength={"50%"}/>
                <MySkill skill={"NextJS"} strength={"50%"}/>
                <MySkill skill={"DSA"} strength={"60%"}/>
                <MySkill skill={"MySQL"} strength={"30%"}/>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;
