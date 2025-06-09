export default function ContactForm() {
  return (
    <section className="bg-slate-950 backdrop-blur-md text-white pt-32 pb-16 px-4 md:px-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-gray-800/40 backdrop-blur-md shadow-xl rounded-lg p-8 border border-gray-600/20">
        <h2 className="text-4xl font-body text-[#cccccc] mb-6">
          Get in touch
        </h2>
        <p className="font-body text-gray-300 mb-10">
          Have a project in mind, want to collaborate, or just say hello? Drop us a message.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-ui text-gray-400 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full bg-gray-800/60 backdrop-blur-md text-white border border-gray-500/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accentRed transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-ui text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className="w-full bg-gray-800/60 backdrop-blur-md text-white border border-gray-500/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accentRed transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-ui text-gray-400 mb-1">Project Type</label>
            <select
              className="w-full bg-gray-800/60 backdrop-blur-md text-white border border-gray-500/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accentRed transition duration-200"
              required
            >
              <option value="">Select an option</option>
              <option value="vfx">VFX / Compositing</option>
              <option value="3d">3D Modeling & Animation</option>
              <option value="grading">Color Grading</option>
              <option value="training">Training / Course Inquiry</option>
              <option value="other">Something Else</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-ui text-gray-400 mb-1">Your Message</label>
            <textarea
              rows="6"
              placeholder="Tell us a bit about your project or question..."
              className="w-full bg-gray-800/60 backdrop-blur-md text-white border border-gray-500/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accentRed transition duration-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="border border-gray-500/30 rounded-full px-6 py-3 backdrop-blur-md bg-slate-900 text-white hover:bg-slate-800 transition duration-300 shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
