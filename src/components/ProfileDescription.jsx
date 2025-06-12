export default function ProfileDescription() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 text-white text-center z-10 font-heading">
      <div className="text-4xl lg:text-6xl font-bold">Alpha<span className="text-green-400">FX</span></div>
      <div className="text-2xl lg:text-3xl mt-2">Studio</div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfy6Y5nd3kJg3bMmrzBTfkxYuAVC_yoeAPZ8AQHGWrNX0eLIA/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer" className="block my-3 border border-gray-500/30 rounded-full px-4 py-2 
    backdrop-blur-2xl bg-green-500/30 text-gray 
    hover:bg-green-500/10 hover:border-gray-400 transition duration-300 
    shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide">Free Demo Classes</a>
    </div>

  );
}
