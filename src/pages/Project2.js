import React from "react";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons right={"/projet-3"} left={"/projet-1"} />
      </div>
    </main>
  );
};

export default Project2;
