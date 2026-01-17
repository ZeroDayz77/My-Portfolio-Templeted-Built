import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center">
        <h1 className="text-6xl mt-64 font-bold tracking-wide text-gray-900 dark:text-gray-100">
          Hi, my name is
          <span className="ml-3 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>

        <h1 className="text-6xl font-bold tracking-wide mt-4 text-gray-900 dark:text-gray-100">
          {hero.subtitle}
        </h1>

        <a
          href="#About"
          className="text-2xl font-bold p-0.5 mt-6 w-64 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500"
        >
          <div className="bg-white dark:bg-gray-900">
            <span className="block text-center py-1 px-2 font-semibold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
              Want to know more?
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;