
import React from 'react';

export const GrupoYPLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="skewX(-15)">
      <rect x="75" y="10" width="15" height="80" fill="#4A5568" />
      <rect x="95" y="10" width="15" height="80" fill="#2D3748" />
      <rect x="115" y="10" width="15" height="80" fill="#0052CC" />
      <rect x="135" y="10" width="15" height="80" fill="#A0AEC0" />
      <rect x="155" y="10" width="15" height="80" fill="#718096" />
    </g>
    <text x="10" y="65" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#E2E8F0">
      GRUPO
    </text>
    <g transform="translate(0, 5)">
        <path d="M 90 85 C 60 85, 60 40, 110 40" stroke="#E2E8F0" strokeWidth="3" fill="none" />
        <path d="M 170 30 C 200 30, 200 75, 150 75" stroke="#E2E8F0" strokeWidth="3" fill="none" />
        <text fontFamily="Impact, Arial Black, sans-serif" fontSize="60" fontWeight="900" fill="#1A202C">
            <tspan x="85" y="75">y</tspan>
            <tspan x="120" y="75">p</tspan>
        </text>
    </g>
  </svg>
);
