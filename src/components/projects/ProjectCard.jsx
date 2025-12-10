import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className=" group w-full lg:w-1/2 h-full transition-all rounded-none  hover:rounded-[50px] overflow-hidden relative">
        <img
          className="object-cover h-full w-full "
          src={props.image1}
          alt="pjc"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center p-2 ">
          <h2 className="uppercase text-6xl font-[primary] border-4 rounded-full pt-3  px-4">
            VIOR LE PROJECT
          </h2>
        </div>
      </div>
      <div className=" group w-full lg:w-1/2 h-full transition-all rounded-none  hover:rounded-[50px] overflow-hidden relative">
        <img
          className="object-cover h-full w-full "
          src={props.image2}
          alt="pjc"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center p-2 ">
          <h2 className="uppercase text-6xl font-[primary] border-4 rounded-full pt-3  px-4">
            VIOR LE PROJECT
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
