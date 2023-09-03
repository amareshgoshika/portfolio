import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SareeBox from "../../chip/SareeBox";
import Saree1 from "../../assets/saree1.png";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { MdClass } from "react-icons/md";
import { GiArchiveRegister, GiArtificialIntelligence } from "react-icons/gi";
import { FaReact, FaTaxi } from "react-icons/fa";
import { TbReceiptTax } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";

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
                saree={Saree1}
                skill={"Class Attendance"}
              />
              <SareeBox
                saree={Saree1}
                skill={"MSTD"}
              />
{/*             </div> */}
{/*             <div className="first2 flex flex-col gap-10"> */}
{/*               <SareeBox */}
{/*                 logo={<BiFoodMenu />} */}
{/*                 skill={"Hungry App"} */}
{/*               /> */}
{/*               <SareeBox */}
{/*                 logo={<FaTaxi />} */}
{/*                 skill={"Wrong Parker"} */}
{/*               /> */}
{/*             </div> */}
{/*             <div className="first2 flex flex-col gap-10"> */}
{/*               <SareeBox */}
{/*                 logo={<GiArchiveRegister />} */}
{/*                 skill={"Stud Login Reg"} */}
{/*               /> */}
{/*               <SareeBox */}
{/*                 logo={<GiArtificialIntelligence />} */}
{/*                 skill={"Ai Adda"} */}
{/*               /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sarees;