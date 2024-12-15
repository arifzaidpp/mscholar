import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video max-w-4xl mx-auto">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&controls=1&rel=0"
        title="About IslamicEdu"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Fallback for when video hasn't loaded */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors">
          <Play size={24} className="text-white" />
          <span className="font-medium">Watch Video</span>
        </button>
      </div>
    </div>
  );
};

export default VideoSection;