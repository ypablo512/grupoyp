
import React from 'react';

export interface BusinessUnit {
  id: string;
  name: string;
  sector: string;
  description: string;
  services: string[];
  logo: React.ReactNode;
  image: string;
  color: 'blue' | 'gray' | 'yellow' | 'green';
}
