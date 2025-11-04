
import React from 'react';
import { GrupoYPLogo } from './icons/GrupoYPLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex items-center">
            <GrupoYPLogo className="h-8 w-auto mr-3" />
            <p className="text-sm text-gray-400">&copy; {currentYear} Grupo YP. Todos los derechos reservados.</p>
          </div>
          <p className="text-sm text-gray-500">
            Powered by <a href="https://www.yellowpulse.digital" target="_blank" rel="noopener noreferrer" className="font-semibold text-yellow-400 hover:text-yellow-300 transition">Yellow Pulse Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;