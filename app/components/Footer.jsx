import React from 'react'
import {  FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10 rounded-t-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Startup Assistant</h3>
            <p>Your AI partner for idea validation, business planning, and startup analysis.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Business Planner</a></li>
              <li><a href="#" className="hover:underline">City Analyzer</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><FaEnvelope className="mr-2" /> zain@gmail.com</li>
              <li className="flex items-center"><FaPhone className="mr-2" /> +1 (308) 5440354</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2" />CS Department, UAF, Faisalabad</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} Startup Assistant. All rights reserved.</div>
      </footer>
  )
}

export default Footer