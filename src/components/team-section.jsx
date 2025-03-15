import React from 'react';
import {  FaUserTie, FaUserCog, FaUserShield } from "react-icons/fa";

export function TeamSection() {
  const teamMembers = [
    { name: 'Manvendra Singh Rajwada', role: 'CEO', icon: <FaUserTie />, color: 'bg-[#FEA250]' },
    { name: 'Pratyush Kumar Singh', role: 'COO', icon: <FaUserCog />, color: 'bg-[#48A8A5]' },
    { name: 'Rishabh Gupta', role: 'CTO', icon: <FaUserShield />, color: 'bg-[#1A1A1A]' },
    { name: 'Shikhar Dwivedi', role: 'Developer', icon: <FaUserShield />, color: 'bg-[#FEA250]' },
  ];

  return (
    <section id="team" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">Meet Our</span>
            <span className="text-2xl font-semibold text-[#FEA250]">Team</span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tighter sm:text-6xl text-gray-900">
            Our Leadership
          </h2>

          <p className="max-w-xl text-lg text-gray-600">
            Our dynamic team is committed to delivering exceptional results through expertise and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className={`${member.color} p-8 rounded-2xl shadow-lg text-white relative overflow-hidden transition-transform transform hover:scale-105`}>
                <div className="absolute top-4 left-4 text-white/30 text-6xl">
                  {member.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 mt-12">{member.name}</h3>
                <p className="text-white/90 text-lg font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
