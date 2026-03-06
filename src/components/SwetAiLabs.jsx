import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // assuming this exists, if not, I can just use text

const SwetAiLabs = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-screen h-screen z-[99999] bg-white overflow-hidden">
      {/* Floating Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-6 left-6 z-[100000] flex items-center justify-center gap-2 bg-white/90 glass shadow-lg backdrop-blur-md px-4 py-2 rounded-full text-brand-700 font-bold hover:scale-105 transition-all text-sm group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Main Menu
      </button>

      {/* Fullscreen Iframe */}
      <iframe 
        src="/swet_ai_labs/index.html" 
        title="SWET AI Labs"
        className="w-full h-full border-none m-0 p-0 block"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SwetAiLabs;
