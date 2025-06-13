import { useEffect, useRef, useState } from "react";

export default function Profile() {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden z-0">
      <video
        ref={videoRef}
        autoPlay={isIntersecting}
        muted
        loop
        playsInline
        preload="none"
        poster="/fallback.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {isIntersecting && (
          <source src="/intro3.mp4" type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}
