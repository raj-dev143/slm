import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="py-6 sm:py-10 lg:pt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 items-center">
          <div className="xl:w-3/5 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-8 items aos-init">
            <h2 className="text-4xl mb-3 md:mb-12">
              <span className="text-[#406213]">SLIM 24 PRO</span> - MEAL
              REPLACEMENT SHAKE FOR HEALTHY WEIGHT MANAGEMENT
            </h2>
            <div className="w-1/6 min-h-1 bg-[#406213]"></div>
            <p className="lg:w-full md:text-1xl font-medium tracking-tight mb-8 md:mb-12 pt-3 text-justify">
              Slim 24 Pro is a meal replacement formula with whey protein, the
              safest form of amino acid, casein & other vital nutrients that
              assist in weight loss naturally. Now, see a healthier and leaner
              you with Slim 24 Pro.
            </p>
          </div>
          <div className="xl:w-1/2 h-48 lg:h-auto aos-init aos-animate">
            <Image src={"/image-one.webp"} width={574} height={364} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
