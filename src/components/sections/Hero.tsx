import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Button from "../sharedComponents/Button";
import HeroImage from "../../../public/images/profile.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="p-4 bg-black">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 text-white">
              <p className="text-lg md:text-3xl leading-snug font-semibold mb-2 md:mb-4">
                Hello, my name is
              </p>
              <p className="text-4xl md:text-7xl font-bold mb-2 md:mb-4">
                Saad Nisar Butt
              </p>
              <p className="text-2xl md:text-4xl leading-snug font-semibold mb-2 md:mb-4">
                And, I'm a <span className="text-red-600 font-bold">Web Developer</span>
              </p>
              <div className="mt-6">
                <Button text={"Hire me"} />
              </div>
            </div>
            <div className="flex-1 mx-5">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="rounded-full mt-10 md:mt-4"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default HeroSection;
