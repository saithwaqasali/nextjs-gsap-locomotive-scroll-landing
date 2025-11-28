"use client";

import Description from "@/components/description";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
