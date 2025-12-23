
import React from 'react';
import { ICONS } from '../constants';

interface PlaceholderImageProps {
  type: 'family' | 'mosque' | 'person' | 'phone' | 'document' | 'heart' | 'water';
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ type, className = '' }) => {
  if (type === 'mosque') return ICONS.mosque(className);
  if (type === 'heart') return ICONS.heart(className);
  if (type === 'water') return ICONS.water(className);
  if (type === 'document') return ICONS.document(className);
  
  const svgs = {
    family: (
      <svg viewBox="0 0 400 300" className={className}>
        <rect fill="#E5E2DC" width="400" height="300"/>
        <circle cx="120" cy="120" r="40" fill="#0D5C4D"/>
        <circle cx="200" cy="110" r="45" fill="#0A4A3E"/>
        <circle cx="280" cy="120" r="40" fill="#0D5C4D"/>
        <ellipse cx="120" cy="220" rx="35" ry="60" fill="#0D5C4D"/>
        <ellipse cx="200" cy="210" rx="40" ry="70" fill="#0A4A3E"/>
        <ellipse cx="280" cy="220" rx="35" ry="60" fill="#0D5C4D"/>
        <circle cx="200" cy="250" r="25" fill="#C9A962"/>
      </svg>
    ),
    person: (
      <svg viewBox="0 0 200 200" className={className}>
        <rect fill="#E5E2DC" width="200" height="200" rx="100"/>
        <circle cx="100" cy="80" r="40" fill="#0D5C4D"/>
        <ellipse cx="100" cy="170" rx="50" ry="40" fill="#0D5C4D"/>
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 200 350" className={className}>
        <rect fill="#1a1a1a" width="200" height="350" rx="24"/>
        <rect x="10" y="10" width="180" height="330" rx="18" fill="#ffffff"/>
        <rect x="70" y="320" width="60" height="5" rx="2" fill="#E5E2DC"/>
        <circle cx="100" cy="30" r="5" fill="#E5E2DC"/>
      </svg>
    ),
  };

  return svgs[type as keyof typeof svgs] || svgs.person;
};

export default PlaceholderImage;
