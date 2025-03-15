import React from 'react';
import { FaHandshake, FaRocket, FaChartLine, FaTags, FaUserFriends } from 'react-icons/fa';

const features = [
  {
    title: 'Tired of agencies ghosting you after promising the world?',
    description: `We’re here to stay and deliver results.`,
    icon: <FaHandshake className="text-6xl text-white/30" />,
    color: "bg-[#FEA250]",
  },
  {
    title: 'Our clients had enough of repeated failures.',
    description: 'See how we turned their businesses around.',
    icon: <FaRocket className="text-6xl text-white/30" />,
    color: "bg-[#48A8A5]",
  },
  {
    title: 'Battle-tested strategies:',
    description: 'We use advanced data analytics tools to track your campaign performance and tailor strategies that work.',
    icon: <FaChartLine className="text-6xl text-white/30" />,
    color: "bg-[#1A1A1A]",
  },
  {
    title: 'Discounts Done Right:',
    description: 'Think your brand deserves more than mediocre marketing?',
    icon: <FaTags className="text-6xl text-white/30" />,
    color: "bg-[#FEA250]",
  },
  {
    title: `We're not just another agency.`,
    description: `We’re your partner in growth, dedicated to boosting retention rates and profitability.`,
    icon: <FaUserFriends className="text-6xl text-white/30" />,
    color: "bg-[#48A8A5]",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">Why Choose Us</span>
            <span className="text-2xl font-semibold text-[#FEA250]">Our Promise</span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tighter sm:text-6xl text-gray-900">
            "Got the Vision? We Make It Unstoppable."
          </h2>

          <p className="max-w-xl text-lg text-gray-600">
            We’re committed to delivering results, building trust, and helping your business grow with proven strategies and dedicated support.
          </p>

          {/* Custom Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mt-10">
            {/* First Row: 2 Items */}
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl shadow-lg text-white relative overflow-hidden transition-transform transform hover:scale-105`}
              >
                <div className="absolute top-4 left-4">{feature.icon}</div>
                <h3 className="text-3xl font-bold mb-4 mt-12">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row: 1 Item */}
          <div className="w-1/2 max-w-6xl mt-10">
            {features.slice(2, 3).map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl shadow-lg text-white relative overflow-hidden transition-transform transform hover:scale-105`}
              >
                <div className="absolute top-4 left-4">{feature.icon}</div>
                <h3 className="text-3xl font-bold mb-4 mt-12">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Third Row: 2 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mt-10">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl shadow-lg text-white relative overflow-hidden transition-transform transform hover:scale-105`}
              >
                <div className="absolute top-4 left-4">{feature.icon}</div>
                <h3 className="text-3xl font-bold mb-4 mt-12">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to transform your business? Let’s talk!</p>
            <button className="bg-[#FEA250] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e68a3e] transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;