import React from "react";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Buttons right={"/projet-4"} left={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project3;
