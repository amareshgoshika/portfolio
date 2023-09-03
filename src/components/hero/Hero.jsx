import React from "react";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";


const Hero = () => {
  return (
    <div id="home" style={{ backgroundColor: "#1c1c1c" }}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={Hero1}
              alt="mine"
            />

        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
//               src='https://i.postimg.cc/pTn61Gr1/Untitled-design222-modified.png'
              src={Hero2}
              alt="mine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
