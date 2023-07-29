import React from "react";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons right={"/contact"} left={"/projet-3"} />
      </div>
    </main>
  );
};

export default Project4;
