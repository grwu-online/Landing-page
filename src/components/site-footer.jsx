import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a results-driven agency dedicated to helping businesses grow through innovative strategies and cutting-edge solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 justify-items-center">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                info@grwu.online
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                +123 456 7890
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-x-4 flex justify-center">
              <a href="https://facebook.com" className="text-gray-400 hover:text-[#FEA250]">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-[#FEA250]">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/grwu.online/" className="text-gray-400 hover:text-[#FEA250]">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-[#FEA250]">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} grwu.online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}