
import React from 'react';

export const YellowPulseLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" stroke="#1A202C" strokeWidth="5" fill="none" />

        <defs>
            <linearGradient id="ypdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#FBBF24'}} />
            <stop offset="100%" style={{stopColor: '#F59E0B'}} />
            </linearGradient>
        </defs>

        {/* 'Y' shape */}
        <polyline points="25,25 40,50 40,75" stroke="url(#ypdGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="55" y1="25" x2="40" y2="50" stroke="url(#ypdGradient)" strokeWidth="4" strokeLinecap="round" />

        {/* 'P' shape */}
        <line x1="60" y1="50" x2="60" y2="75" stroke="url(#ypdGradient)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 60 50 A 12 12 0 1 1 60 26" stroke="url(#ypdGradient)" strokeWidth="4" fill="none" />
        
        {/* Circuit dots */}
        <circle cx="25" cy="25" r="3" fill="#FBBF24" />
        <circle cx="55" cy="25" r="3" fill="#FBBF24" />
        <circle cx="72" cy="26" r="3" fill="#FBBF24" />
        <circle cx="40" cy="75" r="3" fill="#FBBF24" />
        <circle cx="60" cy="75" r="3" fill="#FBBF24" />
        
        {/* Pulse waves */}
        <path d="M 80 40 C 85 45, 85 55, 80 60" stroke="#FBBF24" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 85 35 C 92.5 45, 92.5 55, 85 65" stroke="#FBBF24" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
