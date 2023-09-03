import React from "react";
import SareeBox from "../../chip/SareeBox";

import ladi from "../../assets/ladi.png";
import saree1 from "../../assets/saree1.png";

const Sarees = ({ darkMode }) => {
  return (
    <div id="sarees">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            Sarees
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SareeBox
                logo={saree1}
                skill={"Pochampally"}
              />
              <SareeBox
                logo={saree1}
                skill={"Kanchi"}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SareeBox
                logo={saree1}
                skill={"Dharmavaram"}
              />
              <SareeBox
                logo={saree1}
                skill={"Uppada"}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SareeBox
                logo={saree1}
                skill={"Musraised"}
              />
              <SareeBox
                logo={saree1}
                skill={"Cotton"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sarees;