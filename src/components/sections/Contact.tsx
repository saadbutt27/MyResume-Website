import Wrapper from "../Wrapper";
import Button from "../sharedComponents/Button";

const Contact = () => {
  return (
    <>
      <section className="px-4 py-10 mb-10" id="contact">
        <Wrapper>
          <div className="text-center">
            <h2
              className={`relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['get_in_touch'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4`}
            >
              Contact me
            </h2>
          </div>

          <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-lg mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quo sint accusantium magnam deserunt consectetur nemo a. Harum,
                nobis minus?
              </p>
              <div className="grid grid-cols-[3.5rem,1fr] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-10 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-lg font-semibold">Name</p>
                  <p className="text-lg text-slate-600">Saad Nisar Butt</p>
                </div>
              </div>
              <div className="grid grid-cols-[3.5rem,1fr] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-10 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div>
                  <p className="text-lg font-semibold">Phone number</p>
                  <p className="text-lg text-slate-600">+92 317 2122321</p>
                </div>
              </div>
              <div className="grid grid-cols-[3.5rem,1fr] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-10 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-lg text-slate-600">sb033750@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Message me</h3>
              <form action="">
                <div className="block md:flex md:space-x-4 mb-3">
                  <div className="flex-1 mb-3 md:mb-0">
                    <input
                      type="text"
                      className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex-1 mb-3 md:mb-0">
                    <input
                      type="email"
                      className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="text-lg border-2 border-slate-300 rounded-md px-3 py-2 w-full"
                    cols={30}
                    rows={2}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <Button text={"Send message"} />
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Contact;
