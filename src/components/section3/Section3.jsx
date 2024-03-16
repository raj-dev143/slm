import React from "react";

const Section3 = () => {
  return (
    <div className="pt-3 pb-5 relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 hidden md:block">
            <div className="flex justify-left md:justify-left">
              <h2
                className="bebas tracking-wider text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                LOSING WEIGHT STANDS FOR:
              </h2>
            </div>
            <div className="flex justify-left">
              <hr className="new5 w-24 flex justify-center md:justify-center min-h-1 bg-[#406213] opacity-100" />
            </div>
          </div>
          <div className="col-md-12 py-3 block md:hidden">
            <div className="flex justify-center">
              <h2
                className="bebas tracking-wider text-black text-3xl sm:text-4xl md:text-4xl font-medium mb-3 md:mb-12 text-start text-uppercase aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                LOSING WEIGHT STANDS FOR:
              </h2>
            </div>
            <div className="flex justify-center">
              <hr className="new5 w-16 flex justify-center items-center min-h-1 bg-[#406213] opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
