import React from "react";
import project1 from "../assets/project12.jpg";
import project2 from "../assets/project2.jpg";
import project3 from '../assets/project3.jpg'

const Work = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      href2: "https://bring-it-app.vercel.app/",
      href: "https://github.com/tomasgelvez/bring-it-app"
    },
    {
      id: 2,
      src: project2,
      href2: "https://dogs-coral.vercel.app/",
      href: "https://github.com/tomasgelvez/Dogs"
    }
    ,
    {
      id: 3,
      src:project3,
      href2: "https://rick-and-morty-zeta-ten.vercel.app/",
      href:"https://github.com/tomasgelvez/rickAndMorty"
    }
  ];

  return (
    <div
      name="work"
      className="bg-gradient-to-b  bg-[#0a192f] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Works
          </p>
          <p className="py-6">Mira algunos de mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href,href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={href2} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={href} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;