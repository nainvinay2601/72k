import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  //   const locate = useLocation();
  //   console.log(locate.pathname) // current path;

  const currentPath = useLocation().pathname; // this will detect the currentPath and we need to run our loading animation each time the path is changed

  // so this animation is basically dependend on currentPath so we can directly pass this to useGSAP hook dependency array-> now each time the path is changed this useGsap animation will work

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        duration: 0.5,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        // duration: 0.5,

        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.2,
      });
    },
    [currentPath]
  );
  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        <div className="h-screen w-full fixed z-10 flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
