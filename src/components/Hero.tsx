import React from 'react';
import { ArrowRight, CheckCircle, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
          alt="AI and DevOps technology workspace"
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              IFLEON
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
              Infinite Logical Elements of Network
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-teal-400">Infinite Possibilities,</span>
            <br />
            Logical Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals and businesses across India with innovative AI solutions, 
            DevOps automation, cloud migration, cybersecurity, and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                       flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <a
              href="https://ifleon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 
                       px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                       transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Visit ifleon.com</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {[
              'AI Solutions & Analytics',
              'DevOps & CI/CD Automation',
              'Cloud Migration & Security'
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/blog"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105 
                       flex items-center justify-center space-x-2"
            >
              <span>Read Our Blog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <a
              href="https://github.com/mahiprime2001"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-blue-900 
                       px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                       transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>View Source Code</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg">
              Founded by S. Mahendra Reddy • Based in Nellore, Andhra Pradesh • Serving Pan-India
            </p>
            <p className="text-blue-200 text-sm mt-2">
              Founded April 5, 2022 • AI Generalist & DevOps Expert • Targeting ₹75 Lakh Revenue in 2025
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};