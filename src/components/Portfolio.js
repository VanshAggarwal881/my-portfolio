import React from "react";
import CRUDpng from "../assets/portfolio/CRUDpng.png";
import healthpng from "../assets/portfolio/healthpng.png";
import musicpng from "../assets/portfolio/musicpng.png";
import stoppng from "../assets/portfolio/stoppng.png";
import refokuspng from "../assets/portfolio/refokuspng.png";
import etp from "../assets/portfolio/expensetrackerpng.png";
import gemini from "../assets/portfolio/gemini.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: CRUDpng,
      demo: "https://clickcart-pi.vercel.app/",
      code: "https://github.com/VanshAggarwal881/clickcart",
    },
    {
      id: 2,
      src: refokuspng,
      demo: "https://refokus-website-portfolio-page.vercel.app/",
      code: "https://github.com/VanshAggarwal881/Refokus_website_Portfolio_page",
    },
    {
      id: 3,
      src: gemini,
      demo: "https://gemini-clone-gilt-three.vercel.app/",
      code: "https://github.com/VanshAggarwal881/Gemini-Clone",
    },
    {
      id: 4,
      src: musicpng,
      demo: "https://music-player-app-coral.vercel.app/",
      code: "https://github.com/VanshAggarwal881/Music_Player_Project-beginner-friendly-",
    },
    {
      id: 5,
      src: stoppng,
      demo: "https://vanshaggarwal881.github.io/Prasunet_WD_02/",
      code: "https://github.com/VanshAggarwal881/Stopwatch-Web-Application",
    },
    {
      id: 6,
      src: healthpng,
      demo: "https://health-care-dashboard-seven.vercel.app/",
      code: "https://github.com/VanshAggarwal881/health_care_dashboard",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-500 rounded-lg  h-[55vh]"
            >
              <img
                src={src}
                alt="projectimg"
                className="rounded-md duration-200 w-full hover:scale-105 h-[70%]"
              />
              <div className="flex items-center justify-center">
                <a
                  className="text-center w-1/2 px-6 py-3 mt-8 duration-200 hover:scale-125"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="text-center w-1/2 px-6 py-3 mt-8 duration-200 hover:scale-125"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
