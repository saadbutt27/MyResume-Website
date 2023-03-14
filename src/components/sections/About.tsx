import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Heading from "../sharedComponents/Heading";
import Button from "../sharedComponents/Button";
import AboutImage from "../../../public/images/pic1-removebg-preview-crop-removebg-preview.jpg";
const About = () => {
  return (
    <>
      <section className="py-16">
        <Wrapper>
          <Heading title={"About me"} text={"who_i_am"} />
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[100%] lg:w-[45%] flex justify-center my-0 mx-[60px] lg:block lg:my-auto lg:pl-16">
              <Image
                src={AboutImage}
                alt="He's Saad"
                className="h-[350px] w-[350px] lg:h-[400px] lg:w-[400px] rounded-md object-cover"
              />
            </div>
            <div className="w-[100%] lg:w-[55%] mt-6 px-10 lg:px-0">
              <h3 className="text-2xl lg:text-2xl font-semibold mb-4">
                I&apos;m Saad and I&apos;m a{" "}
                <span className="text-red-600">Developer</span>
              </h3>
              <p className="text-justify text-sm lg:text-lg mb-4">
                Hi there! My name is [Saad Nisar Butt], and I&apos;m a web
                developer. I have always been passionate about technology and
                its ability to bring people together and create meaningful
                experiences. As a web developer, I&apos;m always looking for new
                and exciting ways to bring my ideas to life.I have experience
                with a wide range of technologies and frameworks, including
                [Next JS, Blockchain, Metaverse technologies]. I&apos;m
                constantly learning and growing, and I believe that the best way
                to stay on top of the latest trends and techniques is to be an
                enthusiastic learner.
              </p>
              <div>
                <Link href={""}>
                  <Button text="Download Resume" />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;
