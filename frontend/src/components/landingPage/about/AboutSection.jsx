import React from 'react';
import VideoSection from './VideoSection';
import PartnerLogos from './PartnerLogos';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About MScholar
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our mission to provide authentic Islamic education worldwide through
            modern technology and traditional teaching methods.
          </p>
        </div>

        <VideoSection />
        
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Our Partner Institutions
          </h3>
          <PartnerLogos />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;