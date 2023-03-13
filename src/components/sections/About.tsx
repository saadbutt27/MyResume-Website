import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Button from "../sharedComponents/Button";
import AboutImage from "../../../public/images/pic1-removebg-preview-crop-removebg-preview.jpg";
const About = () => {
  return (
    <>
      <section className="py-16">
        <Wrapper>
          <div className="text-center">
            <h2 className="relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['who_i_am'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4">
              About me
            </h2>
          </div>
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
                I'm Saad and I'm a{" "}
                <span className="text-red-600">Developer</span>
              </h3>
              <p className="text-justify text-sm lg:text-lg mb-4">
                Hi there! My name is [Saad Nisar Butt], and I'm a web developer.
                I have always been passionate about technology and its ability
                to bring people together and create meaningful experiences. As a
                web developer, I'm always looking for new and exciting ways to
                bring my ideas to life.I have experience with a wide range of
                technologies and frameworks, including [Next JS, Blockchain,
                Metaverse technologies]. I'm constantly learning and growing,
                and I believe that the best way to stay on top of the latest
                trends and techniques is to be an enthusiastic learner.
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
