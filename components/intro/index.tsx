"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: true,

        start: "top",

        end: "+=500px",
      },
    });

    timeline

      .from(background.current, { clipPath: `inset(15%)` })

      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <section>
      <div className="relative w-full flex justify-center" ref={homeHeader}>
        <div
          className="h-[140vh] w-full absolute brightness-75"
          ref={background}
        >
          <Image
            className="object-cover"
            src="/background.jpeg"
            alt="background"
            fill={true}
          />
        </div>
        <div className="relative flex justify-center mt-[30vh] h-full">
          <div
            ref={introImage}
            data-scroll
            data-scroll-speed="0.3"
            className="absolute brightness-90 w-80 h-[450px]"
          >
            <Image
              className="object-cover object-top"
              src="/background.jpeg"
              alt="inro"
              fill={true}
            />
          </div>
          <h1
            data-scroll
            data-scroll-speed="0.7"
            className="text-white text-[7vw] mt-20 z-3 whitespace-nowrap text-center"
          >
            SMOOTH SCROLL
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
