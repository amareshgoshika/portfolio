import React from "react";

const SkillBox = ({ saree, skill }) => {
  return (
    <div
    data-aos="zoom-in" data-aos-duration="1000"
      className={
        "box w-[25rem] h-[25rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[20rem] sm:h-[20rem] exsm:w-[15rem] exsm:h-[15rem]"
      }
    >
      <div
        className={
          " w-20 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl"
        }
      >
        {saree}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
