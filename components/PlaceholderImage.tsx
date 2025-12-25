import React from 'react';
import { ICONS } from '../constants';

interface PlaceholderImageProps {
  type: 'family' | 'mosque' | 'person' | 'phone' | 'document' | 'heart' | 'water' | 'profile' | 'family1' | 'family2' | 'quran';
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ type, className = '' }) => {
  if (type === 'heart') return ICONS.heart(className);
  if (type === 'water') return ICONS.water(className);
  if (type === 'document') return ICONS.document(className);
  
  const svgs = {
    profile: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="profileBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#D4E8E4',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#B8D5CF',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>
        <rect fill="url(#profileBg)" width="800" height="1000"/>
        <ellipse cx="400" cy="700" rx="180" ry="240" fill="#0D5C4D" opacity="0.85"/>
        <circle cx="400" cy="350" r="140" fill="#0D5C4D" opacity="0.85"/>
        <circle cx="400" cy="350" r="120" fill="#8BA39E" filter="url(#blur1)"/>
        <rect x="300" y="520" width="200" height="8" fill="#0A4A3E" opacity="0.3"/>
      </svg>
    ),
    family1: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="family1Bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#F5F2ED',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#E8E4DC',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur2">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect fill="url(#family1Bg)" width="800" height="1000"/>
        <ellipse cx="300" cy="700" rx="140" ry="200" fill="#0D5C4D" opacity="0.8"/>
        <ellipse cx="500" cy="700" rx="140" ry="200" fill="#0A4A3E" opacity="0.8"/>
        <circle cx="300" cy="400" r="100" fill="#0D5C4D" opacity="0.8"/>
        <circle cx="500" cy="400" r="100" fill="#0A4A3E" opacity="0.8"/>
        <circle cx="300" cy="400" r="85" fill="#9FB5B0" filter="url(#blur2)"/>
        <circle cx="500" cy="400" r="85" fill="#8FA5A0" filter="url(#blur2)"/>
      </svg>
    ),
    family2: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="family2Bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#EAE7E0',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#DDD9D0',stopOpacity:1}} />
          </linearGradient>
          <filter id="blur3">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <rect fill="url(#family2Bg)" width="800" height="1000"/>
        <ellipse cx="250" cy="750" rx="120" ry="180" fill="#0A4A3E" opacity="0.75"/>
        <ellipse cx="400" cy="700" rx="150" ry="220" fill="#0D5C4D" opacity="0.85"/>
        <ellipse cx="550" cy="750" rx="120" ry="180" fill="#0A4A3E" opacity="0.75"/>
        <circle cx="250" cy="450" r="85" fill="#0A4A3E" opacity="0.75"/>
        <circle cx="400" cy="400" r="110" fill="#0D5C4D" opacity="0.85"/>
        <circle cx="550" cy="450" r="85" fill="#0A4A3E" opacity="0.75"/>
        <circle cx="250" cy="450" r="70" fill="#95ACA7" filter="url(#blur3)"/>
        <circle cx="400" cy="400" r="95" fill="#9FB5B0" filter="url(#blur3)"/>
        <circle cx="550" cy="450" r="70" fill="#95ACA7" filter="url(#blur3)"/>
      </svg>
    ),
    mosque: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#E8F0ED',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#D4E3DE',stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect fill="url(#skyBg)" width="800" height="1000"/>
        <rect x="200" y="400" width="400" height="600" fill="#0D5C4D" opacity="0.9"/>
        <ellipse cx="400" cy="400" rx="220" ry="100" fill="#0A4A3E" opacity="0.9"/>
        <rect x="320" y="200" width="160" height="200" fill="#0D5C4D" opacity="0.9"/>
        <ellipse cx="400" cy="200" rx="80" ry="50" fill="#0D5C4D" opacity="0.9"/>
        <circle cx="400" cy="150" r="25" fill="#C9A962"/>
        <rect x="150" y="450" width="40" height="550" fill="#0A4A3E" opacity="0.85"/>
        <rect x="610" y="450" width="40" height="550" fill="#0A4A3E" opacity="0.85"/>
        <ellipse cx="170" cy="450" rx="20" ry="30" fill="#0A4A3E" opacity="0.85"/>
        <ellipse cx="630" cy="450" rx="20" ry="30" fill="#0A4A3E" opacity="0.85"/>
        <path d="M340 600 Q400 550 460 600 L460 1000 L340 1000 Z" fill="#F0EDE5" opacity="0.4"/>
      </svg>
    ),
    quran: (
      <svg viewBox="0 0 800 1000" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bookBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#E5DED0',stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#D8CFC0',stopOpacity:1}} />
          </linearGradient>
        </defs>
        <rect fill="url(#bookBg)" width="800" height="1000"/>
        <rect x="150" y="150" width="500" height="700" rx="20" fill="#0D5C4D" opacity="0.95"/>
        <rect x="170" y="170" width="460" height="660" rx="15" fill="#F5F0E5"/>
        <path d="M400 280 L420 340 L370 315 L430 315 L380 340 Z" fill="#C9A962"/>
        <rect x="230" y="400" width="340" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="430" width="300" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="460" width="320" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="510" width="340" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="540" width="280" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="230" y="570" width="310" height="8" rx="4" fill="#0D5C4D" opacity="0.25"/>
        <rect x="170" y="170" width="460" height="660" rx="15" fill="none" stroke="#C9A962" strokeWidth="3"/>
      </svg>
    ),
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
