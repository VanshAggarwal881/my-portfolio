import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import reactimg from "../assets/react.png";

function Experience() {
  const logo = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: node,
      title: "Nodejs",
      style: "shadow-green-300",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {logo.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg md:w-[17rem] ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />

              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
