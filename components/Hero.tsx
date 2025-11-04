
import React from 'react';
import { GrupoYPLogo } from './icons/GrupoYPLogo';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // h-20 in pixels (5rem * 16px/rem)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/d/1ahHzyOVDFk2dwYUPn14J7GuS6xiv_R_j')" }}
      ></div>
      <div className="absolute inset-0 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_0,transparent_100%)]"></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
             <GrupoYPLogo className="h-24 md:h-32 w-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
            Innovación. Confianza. Compromiso.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Unimos visión y experiencia para construir el futuro de sus negocios, proyectos y patrimonio.
          </p>
          <div className="mt-10">
            <a 
              href="#el-coral" 
              onClick={(e) => handleScrollClick(e, '#el-coral')}
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Conoce Nuestras Unidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
