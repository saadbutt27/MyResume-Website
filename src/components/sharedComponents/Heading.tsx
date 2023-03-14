const Heading = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className="text-center">
        <h2
          className={`relative text-4xl font-semibold mb-16 pb-5 before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-44 before:h-1 before:bg-black before:-translate-x-2/4 after:content-['${text}'] after:absolute after:-bottom-3 after:left-[50%] after:text-lg after:text-red-600 after:p-1 after:bg-white after:-translate-x-2/4`}
        >
          {title}
        </h2>
      </div>
    </>
  );
};

export default Heading;
