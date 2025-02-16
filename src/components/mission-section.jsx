import { FaRocket, FaUsers, FaSeedling } from "react-icons/fa";

export function MissionSection() {
  return (
    <section id="mission" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">Our</span>
            <span className="text-2xl font-semibold text-[#FEA250]">Mission</span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-gray-900">
            Elevate, Engage, Grow.
          </h2>

          <p className="max-w-xl text-lg text-gray-600">
            Empowering brands with innovative strategies, meaningful connections, and sustainable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10">
            <div className="bg-[#FEA250] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/30 text-6xl">
                <FaRocket />
              </div>
              <h3 className="text-3xl font-bold mb-4">Elevate</h3>
              <p className="text-white/90">
                Redefine your brand's altitude with a fresh perspective and innovative strategies, pushing you to new
                heights of success.
              </p>
            </div>

            <div className="bg-[#48A8A5] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/30 text-6xl">
                <FaUsers />
              </div>
              <h3 className="text-3xl font-bold mb-4">Engage</h3>
              <p className="text-white/90">
                Create conversations that matter and build a loyal community around your brand, fostering deeper
                connections with your audience.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/30 text-6xl">
                <FaSeedling />
              </div>
              <h3 className="text-3xl font-bold mb-4">Grow</h3>
              <p className="text-white/90">
                Cultivate a thriving brand ecosystem that fosters sustainable growth and success, ensuring your brand
                flourishes for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}