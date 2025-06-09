import UtilityButton from "../utils/UtilityButton";

export default function CategoryCard({ title, description, source, images = [] }) {
  return (
    <div>
      <div>
        <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
      
      </div>
      <div className="flex flex-wrap px-4 py-3 m-2 cursor-pointer">
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Image ${index + 1}`}
      className="mx-2 my-2 px-2 border border-gray-400 rounded 
                 transition-transform duration-300 ease-in-out
                 hover:scale-110"
      height={150}
      width={150}
    />
  ))}
</div>

    </div>
  );
}
