import React from "react";
import Carousel from "./Carousel/Carousel";
import './StartUpWithUs.css'

const StartUpWithUs = () => {
  return (
    <>
      <div className="m-ss">
        <div className="section-header">
          <h1>StartUpWithUs</h1>
        </div>
        <div className="m-ss-c">
          <div className="m-ss-c-l">
            <h5>
              These are the startups listed with us intending to optimize growth
              . Access the best as per your interest .
            </h5>
            <button>Explore Now</button>
          </div>
          <div className="m-ss-c-r">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUpWithUs;
