import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="pt-3 px-1">
      <div className="py-1 hidden md:block">
        <h2 className="tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-uppercase text-center">
          WHY US
        </h2>
        <div className="flex justify-start md:justify-center">
          <hr className="w-16 flex justify-center md:justify-center min-h-1 bg-[#406213] opacity-100" />
        </div>
      </div>
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-2 md:gap-32">
          <div className="xl:w-3/5 lg:w-3/5 h-auto lg:h-auto overflow-hidden rounded-lg items-center aos-init aos-animate">
            <Image
              src={"/content-sec-img.webp"}
              width={525}
              height={575}
              alt=""
            />
          </div>
          <div
            className="xl:w-full lg:w-3/5 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-0 aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h2 className="bebas tracking-wide text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase">
              Why is weight loss important for a{" "}
              <span className="head-text">healthy life?</span>
            </h2>
            <hr className="new5 w-1/6 bg-[#406213] min-h-1 opacity-100" />
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-3 text-justify">
              Before you aim for weight loss, it&apso;s relevant to know the
              value of losing weight.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-0 text-justify">
              Studies reveal that just a 5% to 10% weight loss affects your
              health positively, so you don&apso;t have to lose tons of weight
              to enjoy physical benefits of weight loss, just a few pounds will
              do wonders.
            </p>
            <p className="lg:w-full para-color md:text-1xl font-medium tracking-normal line-height-slim mb-8 md:mb-4 pt-0 text-justify">
              The innumerable benefits that you gain from weight loss will
              motivate you to accept the challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
