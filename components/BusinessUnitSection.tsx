
import React from 'react';
import { BusinessUnit } from '../types';

interface BusinessUnitSectionProps {
  unit: BusinessUnit;
  reverseLayout?: boolean;
}

const CheckIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
)

const BusinessUnitSection: React.FC<BusinessUnitSectionProps> = ({ unit, reverseLayout = false }) => {
  const accentColors = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-400',
      bg: 'bg-blue-500',
    },
    gray: {
      border: 'border-gray-500',
      text: 'text-gray-400',
      bg: 'bg-gray-500',
    },
    yellow: {
      border: 'border-yellow-500',
      text: 'text-yellow-400',
      bg: 'bg-yellow-500',
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-400',
      bg: 'bg-green-500',
    }
  };
  const colors = accentColors[unit.color];

  return (
    <section id={unit.id} className="py-20 md:py-32 bg-gray-900/30 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center`}>
          <div className={`order-2 ${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
            <div className="mb-4 flex items-center gap-4">
                <div className="h-16 w-16 flex items-center justify-center">
                    {unit.logo}
                </div>
                <div>
                    <h3 className={`text-sm font-bold uppercase tracking-widest ${colors.text}`}>{unit.sector}</h3>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">{unit.name}</h2>
                </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{unit.description}</p>
            
            <ul className="space-y-4">
              {unit.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className={`flex-shrink-0 h-6 w-6 mr-3 mt-1 ${colors.text}`} />
                  <span className="text-gray-200">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`order-1 ${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative group">
              <div className={`absolute -inset-2.5 bg-gradient-to-r from-gray-600 to-${unit.color}-500 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>
              <img 
                src={unit.image}
                alt={unit.name} 
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUnitSection;
