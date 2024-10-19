import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row ">
        <div
          className="
            flex flex-col justify-center md:h-[65vh] mt-[80px] md:mt-4 "
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            I specialize in creating user-friendly, responsive websites with a
            focus on clean design and seamless user experiences. I bring ideas
            to life on the web through dynamic, interactive interfaces and
            attention to detail.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="ml-1 mt-[1px]"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className=" rounded-2xl md:h-[60vh]  mx-auto mt-4  md:h-[65vh] w-2/3 ">
          <img
            src={HeroImage}
            alt="profile pic"
            className="rounded-2xl w-full md:h-full   "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
