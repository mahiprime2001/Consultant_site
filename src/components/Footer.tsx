import React from 'react';
import { Network, Mail, MapPin, ExternalLink, Calendar, Github, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Network className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-2xl font-bold">IFLEON</span>
                <div className="text-sm text-gray-400">Infinite Logical Elements of Network</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses and individuals across India with innovative AI solutions, 
              DevOps automation, cloud migration, and digital transformation services since 2022.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
              <Calendar className="h-4 w-4" />
              <span>Founded April 5, 2022 by S. Mahendra Reddy</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://ifleon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>Visit ifleon.com</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mahiprime2001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">AI Solutions & Analytics</li>
              <li className="hover:text-white cursor-pointer transition-colors">DevOps & CI/CD Automation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Migration & Strategy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity & Compliance</li>
              <li className="hover:text-white cursor-pointer transition-colors">Custom Software Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Digital Transformation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Individual Services</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="hover:text-white cursor-pointer transition-colors">Tech Support & Setup</li>
              <li className="hover:text-white cursor-pointer transition-colors">Personal Cybersecurity</li>
              <li className="hover:text-white cursor-pointer transition-colors">Smart Home Integration</li>
              <li className="hover:text-white cursor-pointer transition-colors">IT & AI Education Guidance</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/mahiprime2001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Source Code
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@ifleon.com" className="hover:text-white transition-colors">
                  info@ifleon.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Nellore, Andhra Pradesh<br />India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 IFLEON (Infinite Logical Elements of Network). All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Founded by S. Mahendra Reddy • AI Generalist & DevOps Expert • Targeting ₹75 Lakh Revenue in 2025
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Technical Blog
              </Link>
              <a
                href="https://ifleon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Service Portal
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 
                         rounded-lg text-sm transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};