import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-14">
        <div className="pb-2 ">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500
                        "
          >
            About
          </p>
        </div>

        <p className="text-2xl font-semibold mt-10">
          "I'm a software developer with a passion for building scalable and
          efficient web applications. From crafting intuitive user interfaces
          with React to developing robust backend systems with Node.js and
          MongoDB, I enjoy solving complex problems and delivering seamless
          digital experiences. My toolkit includes technologies like Express.js
          for server-side logic, JWT for authentication, and Cloudinary for
          media management. I’m always eager to learn and push the boundaries of
          what’s possible on the web.
        </p>

        <br />

        <p className="text-2xl font-semibold mt-5">
          I’m constantly learning and experimenting with new tools and
          techniques to keep up with the ever-evolving web. Whether I'm building
          sleek landing pages or dynamic applications, I focus on creating
          responsive, performant, and aesthetically pleasing websites. Outside
          of coding, I enjoy exploring new design trends and try to contribute
          in open-source projects."
        </p>
      </div>
    </div>
  );
}

export default About;
