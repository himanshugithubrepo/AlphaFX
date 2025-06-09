import React, { useState } from 'react';
import comp from '../assets/comp.png'
import roto from '../assets/roto.png'
import paintprep from '../assets/paintprep.jpg'

export default function VFXShowreel() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: 'Roto',
      videoId: 'lqq4OrMMBcs',
      thumbnail: roto,
    },
    {
      title: 'Paint/Prep',
      videoId: 'lqq4OrMMBcs',
      thumbnail: paintprep,  
    },
    {
      title: 'Comp',
      videoId: 'lqq4OrMMBcs',
      thumbnail: comp,  
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">VFX Showreel</h1>
        <p className="mb-10 text-gray-400">
          Showcasing our work in Roto, Tracking, Paint/Prep & Compositing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer group relative"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-b-lg text-sm text-white">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video p-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <video
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}
