
import React from 'react';

interface PlaceholderLogoProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const PlaceholderLogo: React.FC<PlaceholderLogoProps> = ({ name, ...props }) => {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="100" rx="15" fill="#2D3748" />
      <text 
        x="50" 
        y="50" 
        dy=".3em" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontSize="40" 
        fontWeight="bold" 
        fill="#A0AEC0"
      >
        {initials}
      </text>
    </svg>
  );
};
