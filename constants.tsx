
import React from 'react';

export const COLORS = {
  primary: '#0D5C4D',
  primaryDark: '#0A4A3E',
  secondary: '#C9A962',
  background: '#F5F5F4', // stone-100 equivalent
  text: '#1C1917', // stone-900
};

export const ICONS = {
  mosque: (className?: string) => (
    <svg viewBox="0 0 400 300" className={className}>
      <rect fill="#F0EDE5" width="400" height="300"/>
      <rect x="100" y="150" width="200" height="150" fill="#0D5C4D"/>
      <ellipse cx="200" cy="150" rx="100" ry="50" fill="#0D5C4D"/>
      <rect x="180" y="80" width="40" height="70" fill="#0D5C4D"/>
      <ellipse cx="200" cy="80" rx="20" ry="15" fill="#0D5C4D"/>
      <circle cx="200" cy="60" r="8" fill="#C9A962"/>
      <rect x="80" y="180" width="15" height="120" fill="#0A4A3E"/>
      <rect x="305" y="180" width="15" height="120" fill="#0A4A3E"/>
      <ellipse cx="87" cy="180" rx="8" ry="12" fill="#0A4A3E"/>
      <ellipse cx="312" cy="180" rx="8" ry="12" fill="#0A4A3E"/>
      <rect x="160" y="220" width="80" height="80" fill="#F0EDE5" rx="40" ry="40"/>
    </svg>
  ),
  heart: (className?: string) => (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M50 88 C20 60, 5 40, 20 25 C35 10, 50 20, 50 35 C50 20, 65 10, 80 25 C95 40, 80 60, 50 88Z" fill="#C9A962"/>
    </svg>
  ),
  water: (className?: string) => (
    <svg viewBox="0 0 100 100" className={className}>
      <ellipse cx="50" cy="85" rx="35" ry="10" fill="#0D5C4D" opacity="0.3"/>
      <path d="M50 10 C50 10, 20 50, 20 65 C20 82, 33 90, 50 90 C67 90, 80 82, 80 65 C80 50, 50 10, 50 10Z" fill="#0D5C4D"/>
      <ellipse cx="40" cy="55" rx="8" ry="12" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),
  document: (className?: string) => (
    <svg viewBox="0 0 200 260" className={className}>
      <rect fill="#ffffff" width="200" height="260" rx="8" stroke="#E5E2DC" strokeWidth="2"/>
      <rect x="20" y="20" width="120" height="12" rx="2" fill="#0D5C4D"/>
      <rect x="20" y="45" width="160" height="8" rx="2" fill="#E5E2DC"/>
      <rect x="20" y="60" width="140" height="8" rx="2" fill="#E5E2DC"/>
      <rect x="20" y="75" width="155" height="8" rx="2" fill="#E5E2DC"/>
      <rect x="20" y="100" width="80" height="10" rx="2" fill="#C9A962"/>
      <rect x="20" y="120" width="160" height="8" rx="2" fill="#E5E2DC"/>
      <rect x="20" y="135" width="130" height="8" rx="2" fill="#E5E2DC"/>
      <rect x="20" y="160" width="60" height="60" rx="4" fill="#F0EDE5"/>
      <circle cx="50" cy="190" r="15" fill="#0D5C4D" opacity="0.5"/>
    </svg>
  ),
};
