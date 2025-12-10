import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[primary] pt-5 text-center mt-[98%] md:mt-0 lg:mt-0 ">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9vw] leading-[12vw]  flex items-center justify-center">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9vw] leading-[12vw] flex items-center justify-center">
        qui
        <div className="h-[7vw] w-[15vw] rounded-full  overflow-hidden -mt-5 ">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9vw] leading-[12vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
