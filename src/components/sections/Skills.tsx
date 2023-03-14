import Wrapper from "../Wrapper";
import Heading from "../sharedComponents/Heading"
import MySkill from "../sharedComponents/Skill";
const About = () => {
  return (
    <>
      <section className="py-10">
        <Wrapper>
          <Heading title={"My Skills"} text={"what_i_know"} />
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
