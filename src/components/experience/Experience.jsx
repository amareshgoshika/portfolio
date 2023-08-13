import React from "react";

const Resume = () => {
  return (
    <div id="experience" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Development Engineer Intern​
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Electronic Corporation of India Limited, India
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2017 - December 2017
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  ● Developed web application to organize hard copies to a web page called Maharashtra Sales Tax Department.<br/>
                  ● Collected all the hard copies from the business management and stored them into the database.<br/>
                  ● Created the web page to display the database virtually to the consumers and they can directly download the invoice for each row of the table.<br/>
                  ● Created a modal to display the invoice structure with valid data and provided a download button to download the invoice with the letter head in the pdf format.<br/>
                  ● Invoice modal is developed using php and bootstrap. Extracted into a modal and downloaded the invoice.<br/>
                  ● Added validations to the API calls and performed testing with sample data.<br/>
                  ● Participated in the Heavy Water Board Project at R&D Department.<br/>
                  ● Pair programmed with senior developers to understand the code base of the product HWB ECIL.<br/>
                  ● Automated tasks by writing keywords that runs checks data in the MSTD.<br/>
                  ● Written authentication API’s and retrieving APIs for the HWB and MSTD.<br/>
                </p>
              </div>
            </div><br/>
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Development Engineer Intern​
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Electronic Corporation of India Limited, India
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2017 - December 2017
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  ● Developed web application to organize hard copies to a web page called Maharashtra Sales Tax Department.<br/>
                  ● Collected all the hard copies from the business management and stored them into the database.<br/>
                  ● Created the web page to display the database virtually to the consumers and they can directly download the invoice for each row of the table.<br/>
                  ● Created a modal to display the invoice structure with valid data and provided a download button to download the invoice with the letter head in the pdf format.<br/>
                  ● Invoice modal is developed using php and bootstrap. Extracted into a modal and downloaded the invoice.<br/>
                  ● Added validations to the API calls and performed testing with sample data.<br/>
                  ● Participated in the Heavy Water Board Project at R&D Department.<br/>
                  ● Pair programmed with senior developers to understand the code base of the product HWB ECIL.<br/>
                  ● Automated tasks by writing keywords that runs checks data in the MSTD.<br/>
                  ● Written authentication API’s and retrieving APIs for the HWB and MSTD.<br/>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
