
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessUnitSection from './components/BusinessUnitSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { BusinessUnit } from './types';
import { YellowPulseLogo } from './components/icons/YellowPulseLogo';
import { PlaceholderLogo } from './components/icons/PlaceholderLogo';

const YPMotorLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="ypm-silver-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>
        <linearGradient id="ypm-blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      
      {/* Vehicle Outlines */}
      <g stroke="#E2E8F0" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Car */}
        <path d="M65 40 C 40 40, 5 60, 5 90 C 5 100, 15 110, 30 110 L 40 110" />
        <path d="M20 90h30" />
        <path d="M25 95 c5 -5, 15 -5, 20 0" />
        <circle cx="30" cy="100" r="2.5" fill="#E2E8F0" stroke="none" />
        <circle cx="40" cy="100" r="2.5" fill="#E2E8F0" stroke="none" />
        
        {/* Motorcycle */}
        <path d="M170 42 L 200 42 Q 225 42, 235 60 L 245 90 Q 248 105, 230 120" />
        <circle cx="215" cy="120" r="20" strokeWidth="1.5" />
        <circle cx="215" cy="120" r="5" fill="#E2E8F0" stroke="none"/>
        <path d="M195 42 L 190 35" />
      </g>

      {/* Main YP Logo Shape */}
      <path
        d="M 50 110 L 80 50 H 140 V 110 H 50 Z M 150 50 H 200 A 30 30 0 0 1 200 110 H 150 Z"
        fill="url(#ypm-silver-grad)"
        stroke="#4A5568"
        strokeWidth="0.5"
      />
       {/* YP Details */}
      <rect x="85" y="95" width="45" height="3" fill="#A0AEC0" />
      <rect x="85" y="101" width="45" height="3" fill="#A0AEC0" />

      {/* Blue Swoosh */}
      <path
        d="M60 120 C 125 140, 175 140, 240 120"
        fill="none"
        stroke="url(#ypm-blue-grad)"
        strokeWidth="4"
      />

      {/* Text */}
      <text
        x="150"
        y="135"
        textAnchor="middle"
        fill="url(#ypm-blue-grad)"
        fontSize="14"
        fontFamily="sans-serif"
        fontWeight="bold"
        letterSpacing="1"
        style={{textTransform: 'uppercase'}}
      >
        MOTORS
      </text>
      <text
        x="150"
        y="148"
        textAnchor="middle"
        fill="#E2E8F0"
        fontSize="10"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        garage
      </text>
    </svg>
);


const businessUnits: BusinessUnit[] = [
  {
    id: 'el-coral',
    name: 'El Coral',
    sector: 'Inmobiliaria Real Estate',
    description: 'Soluciones integrales en el sector inmobiliario. Ofrecemos confianza y profesionalismo en cada operación, asegurando la satisfacción de nuestros clientes y la optimización de sus inversiones.',
    services: [
      'Compra, venta y alquiler de propiedades',
      'Administración de propiedades y consorcios',
      'Refacción y mantenimiento integral'
    ],
    logo: <PlaceholderLogo name="El Coral" />,
    image: 'https://lh3.googleusercontent.com/d/1RTXNTu5Ok7CxnsPazSP1lUDqQHGQnx_L',
    color: 'blue'
  },
  {
    id: 'yp-agro',
    name: 'YP Agro',
    sector: 'Agropecuario',
    description: 'Especialistas en la gestión y explotación de recursos agropecuarios. Ofrecemos soluciones integrales para la compra, venta y arrendamiento de campos, así como servicios de cría y engorde de ganado, garantizando la máxima rentabilidad y sostenibilidad.',
    services: [
      'Compra, venta y arrendamiento de campos',
      'Cría y engorde de ganado vacuno y bovino',
      'Asesoramiento en inversión agropecuaria'
    ],
    logo: <PlaceholderLogo name="YP Agro" />,
    image: 'https://lh3.googleusercontent.com/d/1k8wVEk8bf6JEsRYqCYmD_CW-M1j_PeoA',
    color: 'green'
  },
  {
    id: 'yp-motor',
    name: 'YP Motor Garage',
    sector: 'Automotor',
    description: 'Tu aliado de confianza en el mundo automotor. Contamos con una amplia gama de vehículos y ofrecemos las mejores condiciones para que encuentres el auto o la moto de tus sueños.',
    services: [
      'Compra, venta y permuta de automotores y motocicletas',
      'Unidades usadas y 0km de todas las marcas',
      'Alquiler de vehículos para cada necesidad'
    ],
    logo: <YPMotorLogo />,
    image: 'https://lh3.googleusercontent.com/d/16d0qYH7cg3r2kP2Fuk2j-EF5oj-ryXi0',
    color: 'gray'
  },
  {
    id: 'yellow-pulse',
    name: 'Yellow Pulse Digital',
    sector: 'Agencia de Marketing Digital e IA',
    description: 'Impulsamos tu marca hacia el futuro digital. Combinamos creatividad, estrategia y tecnología de vanguardia para ofrecer resultados medibles y un crecimiento exponencial para tu negocio.',
    services: [
        'Diseño de Sitios Web y E-Commerce',
        'Marketing y Publicidad Digital (SEO/SEM)',
        'Implementación y desarrollos con Inteligencia Artificial',
        'Creación de contenido audiovisual para Redes Sociales'
    ],
    logo: <YellowPulseLogo />,
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop',
    color: 'yellow'
  },
  {
    id: 'consultoria',
    name: 'Consultoría Jurídica',
    sector: 'Servicios Legales',
    description: 'Asesoramiento legal experto con un enfoque humano y estratégico. Defendemos tus intereses con rigor, confidencialidad y un profundo conocimiento en diversas áreas del derecho.',
    services: [
      'Derecho de Familia',
      'Derecho Penal',
      'Derecho Comercial',
      'Ciberdelitos y Derecho Tecnológico'
    ],
    logo: <PlaceholderLogo name="Consultoría Jurídica" />,
    image: 'https://lh3.googleusercontent.com/d/1FfMzT8VBYKWa_46BhFWdrT9gW5UJ6FsI',
    color: 'blue'
  }
];


const App: React.FC = () => {
  const navLinks = [
    { name: 'Inicio', href: '#home' },
    ...businessUnits.map(unit => ({ name: unit.name, href: `#${unit.id}` })),
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen font-sans">
      <Header links={navLinks} />
      <main>
        <Hero />
        <div className="relative z-10">
          {businessUnits.map((unit, index) => (
            <BusinessUnitSection 
              key={unit.id} 
              unit={unit} 
              reverseLayout={index % 2 !== 0} 
            />
          ))}
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;