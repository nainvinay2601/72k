import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Projects = () => {

    

  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",

        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className=" p-2 lg:p-4 mb-[100vh]">
      <div className=" pt-[45vh] mb-10">
        <h2 className="font-[primaryBold] text-6xl lg:text-[9vw] uppercase text-black">
          Projects
        </h2>
      </div>
      {/* container 2 */}
      <div className="-mt-10 lol">
        {/* <ProjectCard />
         */}

        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className=" hero w-full   lg;h-[700px] mb-4   flex flex-col lg:flex-row  gap-2 lg:gap-4  "
            >
              {" "}
              <ProjectCard image1={elem.image1} image2={elem.image2} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
