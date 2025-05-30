import UtilityButton from "../utils/UtilityButton";

export default function CategoryCard({ title, description, source }) {
  const text = "View Project";
  return (
    <div className="border-gray-400 border rounded-1 px-4 py-3 m-2 w-full">
      <img src="" alt="Project Image" />
      <h3 className="text-xl">{title}</h3>
      <p>{description}</p>
      <a href={source} target="_blank" rel="noopener noreferrer">
        <UtilityButton text={text} />
      </a>
    </div>
  );
}
