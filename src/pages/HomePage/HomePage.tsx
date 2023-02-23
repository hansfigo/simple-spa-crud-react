import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-16">
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{title}</h1>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>
      <div className="flex-shrink-0 mt-6 md:mt-0">
        <div className="h-24 w-24 rounded-full overflow-hidden">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
