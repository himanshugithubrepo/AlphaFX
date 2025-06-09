import colorgrad1 from '../../assets/colorgrad1.jpg';
import colorgrad2 from '../../assets/colorgrad2.jpg';
import vfx1 from '../../assets/vfx1.jpg';

export default function ProjectList() {
  const projects = [
    {
      title: "Cinematic Short - 'Echoes'",
      desc: "A surreal VFX-heavy short film exploring time loops. Compositing, 3D, and color grading done in-house.",
      tags: ["VFX", "Color Grading", "3D"],
      thumbnail: colorgrad1,
    },
    {
      title: "Product Reveal Animation",
      desc: "Photorealistic 3D animation for a tech product using Blender and Unreal Engine.",
      tags: ["3D Animation", "Rendering"],
      thumbnail: colorgrad2,
    },
    {
      title: "Music Video - 'Neon Pulse'",
      desc: "Futuristic cyberpunk-themed music video featuring digital environments and neon-style grading.",
      tags: ["VFX", "Music", "Color Grading"],
      thumbnail: vfx1,
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-slate-950 backdrop-blur-md px-4 md:px-20 text-white font-body">
      <h2 className="text-4xl md:text-5xl font-body text-[#cccccc] uppercase text-center mb-12 tracking-widest">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800/40 rounded-2xl border border-gray-600/30 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 backdrop-blur-md"
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-5">
              <h3 className="text-xl font-ui font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accentRed/20 text-[#cccccc] px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="submit"
                className="border border-gray-500/30 rounded-full px-6 py-3 backdrop-blur-md bg-slate-900 text-white hover:bg-slate-800 transition duration-300 shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

