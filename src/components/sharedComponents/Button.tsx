const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button
        className="flex items-center group text-white font-semibold bg-red-600 hover:bg-transparent hover:text-red-600 duration-300 border-2 border-red-600 text-lg md:text-xl rounded-md px-6 py-1 md:px-8 md:py-3"
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
