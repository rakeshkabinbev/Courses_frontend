import React from "react";

const WhatHM = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-10 xsm:gap-5">
          <div className="flex justify-center">
            <p className="text-[#1DBF73] text-[44px] font-pop font-semibold xsm:text-[12px]">What is Hoping Minds</p>
          </div>
          <div className="flex justify-center">
            <p className="text-[#696984] text-[24px] font-pop w-[70%] text-center leading-12 xsm:text-[10px] xsm:w-[95%] xsm:px-[5%] ">Welcome to HopingMinds, your gateway to a brighter future. As an esteemed partner of the National Skill Development Corporation (NSDC), we stand at the forefront of transformative education, dedicated to nurturing the next generation of leaders and innovators.</p>
          </div>
          <div className="flex flex-row gap-20 justify-center xsm:gap-4">
            <div className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="/Corporate1.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="/Corporate2.mp4"
                title="YouTube video player"
                aria-controls={false}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // aria-controls="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatHM;
