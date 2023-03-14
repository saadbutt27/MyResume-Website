const Skill = ({skill,strength}: {skill:string, strength:string}) => {
    // let w = "w-["+strength+"]"
    // console.log(w);
  return (
    <div className="mb-4 w-full px-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-semibold">{skill}</span>
        <span className="text-lg font-semibold">{strength}</span>
      </div>
      <div className={`h-1 w-full bg-slate-400 relative before:content-[''] before:absolute before:h-full before:w-[${strength}] before:left-0 before:top-0 before:bg-red-600`}></div>
      {/* <div className={`h-2 ${w} bg-slate-600 mt-2`}></div> */}
    </div>
  );
};

export default Skill;
