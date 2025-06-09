export default function EnrollForm() {
  return (
    <section className="bg-gray-950/70 text-white py-16 px-4 md:px-20 font-body backdrop-blur-lg">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-accentRed uppercase tracking-wide mb-8 text-center">
          Enroll in a Course
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-ui text-gray-400">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-800/40 border border-gray-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentRed text-white"
              placeholder="e.g. Himanshu Sharma"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-ui text-gray-400">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800/40 border border-gray-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentRed text-white"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-ui text-gray-400">Select Course</label>
            <select
              className="w-full bg-gray-800/40 border border-gray-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accentRed text-white"
              required
            >
              <option value="">Choose a course</option>
              <option value="vfx">VFX Compositing Masterclass</option>
              <option value="3d">3D Modeling & Animation</option>
              <option value="grading">Color Grading Pro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accentRed hover:bg-red-700 rounded-full text-white font-ui uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </section>
  );
}
