import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hola. Soy Tomas,encantado de conocerte. Por favor mira a tu
              alrededor.
            </p>
          </div>
          <div>
            <p>
              Soy un programador innovador. Un pensador creativo, experto en
              desarrollo de software y trabajando con varias estructuras de
              datos. Competente en varias plataformas, lenguajes y sistemas
              embebidos. Capaz de autogestionarse de manera efectiva durante
              proyectos independientes, así como colaborar como parte de un
              equipo productivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
