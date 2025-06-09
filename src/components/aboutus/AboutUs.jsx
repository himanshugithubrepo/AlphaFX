import VFXShowreel from "../../pages/Vfxshowreel";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="\src\assets\asstem.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl space-y-10 text-center text-white py-16">
          <h1 className="text-5xl font-bold">About Us</h1>

          <p className="text-xl">
            Crafting Visual Magic — One Frame at a Time
          </p>

          <p className="text-lg leading-relaxed">
            At <strong>AlphaFX Studio</strong>, we are more than just a VFX studio — we are a community of passionate artists,
            skilled editors, and next-gen storytellers. Our core services include visual effects (VFX),
            video editing, color grading, and high-end compositing, delivered with precision and creativity that meet global industry standards.
          </p>

          <h2 className="text-3xl font-semibold">Powered by Professionals</h2>

          <p className="text-lg leading-relaxed">
            Our strength lies in our network of expert freelancers with deep industry experience. Whether it’s creating
            cinematic-level VFX or bringing subtle elegance to a commercial edit, our team is equipped to handle diverse
            and demanding projects with ease.
          </p>

          <h2 className="text-3xl font-semibold">Education Meets Innovation</h2>

          <p className="text-lg leading-relaxed">
            Beyond production, we are proud to run <strong>AlphaFX Studio</strong>, our own VFX learning academy.
            Here, we train the next wave of digital artists using AI-powered tools and real-world workflows.
            Our goal? To help students not only learn but lead in the fast-changing world of visual effects.
          </p>

          {/* Why Choose Us Section */}
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed">
            <strong>AlphaFX Studio</strong> stands at the intersection of technology and creativity. We offer:
          </p>

          <ul className="text-left text-lg leading-relaxed space-y-2 list-disc list-inside">
            <li><strong>Cutting-edge VFX:</strong> We leverage the latest tools, software, and AI to deliver visually stunning results.</li>
            <li><strong>Global Talent Pool:</strong> A diverse team of vetted freelancers and professionals with real-world production experience.</li>
            <li><strong>End-to-End Services:</strong> From concept to post-production, we cover the full visual journey.</li>
            <li><strong>Client-Centric Approach:</strong> Every project is personalized, transparent, and deadline-oriented.</li>
            <li><strong>Learning + Earning Ecosystem:</strong> Our students get real-world exposure through internships and live projects.</li>
          </ul>
        </div>
      </div>

      <VFXShowreel />
    </div>
  );
}
