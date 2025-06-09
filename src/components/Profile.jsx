export default function Profile() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/intro3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
