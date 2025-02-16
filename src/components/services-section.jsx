import { FaChartBar, FaUsersCog, FaBroadcastTower, FaChartLine, FaShareAlt, FaCogs } from "react-icons/fa";

const services = [
  { 
    name: 'Performance Marketing', 
    icon: <FaChartBar />, 
    color: "bg-[#FEA250]", 
    description: 'Maximize your ROI with data-driven strategies tailored to your business goals. We optimize campaigns across platforms to drive conversions and growth.' 
  },
  { 
    name: 'UGC and CGC', 
    icon: <FaUsersCog />, 
    color: "bg-[#48A8A5]", 
    description: 'Leverage the power of User-Generated Content (UGC) and Customer-Generated Content (CGC) to build trust and authenticity for your brand.' 
  },
  { 
    name: 'Performance Graphics', 
    icon: <FaBroadcastTower />, 
    color: "bg-[#1A1A1A]", 
    description: 'Captivate your audience with high-performance visuals designed to boost engagement and drive results.' 
  },
  { 
    name: 'Retention Marketing', 
    icon: <FaChartLine />, 
    color: "bg-[#FEA250]", 
    description: 'Turn one-time customers into loyal advocates with personalized retention strategies that keep your audience coming back.' 
  },
  { 
    name: 'Social Media Management', 
    icon: <FaShareAlt />, 
    color: "bg-[#48A8A5]", 
    description: 'Elevate your social media presence with curated content, strategic planning, and community engagement that resonates with your audience.' 
  },
  { 
    name: 'CRO & Landing Page Development', 
    icon: <FaCogs />, 
    color: "bg-[#1A1A1A]", 
    description: 'Convert visitors into customers with optimized landing pages and Conversion Rate Optimization (CRO) techniques that deliver measurable results.' 
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">Here is what we do</span>
            <span className="text-2xl font-semibold text-[#FEA250]">Our Services</span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tighter sm:text-6xl text-gray-900">
            Our Services
          </h2>

          <p className="max-w-xl text-lg text-gray-600">
            We offer a wide range of services to elevate your brand, engage your audience, and drive measurable results. From performance marketing to creative solutions, we’ve got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10">
            {services.map((service, index) => (
              <div key={index} className={`${service.color} p-8 rounded-2xl shadow-lg text-white relative overflow-hidden transition-transform transform hover:scale-105`}>
                <div className="absolute top-4 left-4 text-white/30 text-6xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 mt-12">{service.name}</h3>
                <p className="text-white/90">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}