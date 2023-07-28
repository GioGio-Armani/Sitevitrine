import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const hoverables = document.querySelectorAll(".hover");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });

    hoverables.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;
