import React from "react";

const SkillBox = ({ saree, skill }) => {
  return (
    <div
    data-aos="zoom-in" data-aos-duration="1000"
      className={
        "box w-[25rem] h-[25rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[20rem] sm:h-[20rem] exsm:w-[15rem] exsm:h-[15rem]"
      }
    >
    <img
      data-aos="fade-up"
        className=" h-[80%]  w-[90%] object-cover md:h-[95%] md:m-auto sm:m-0"
        src={saree}
        alt="mine"
      />
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
