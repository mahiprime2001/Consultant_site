import React, { useState, useEffect } from 'react';
import { Menu, X, Network } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Network className={`h-8 w-8 transition-colors ${
              isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'
            }`} />
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}>
                IFLEON
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Infinite Logical Elements of Network
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                {['Services', 'About', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors hover:text-blue-600 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </>
            )}
            <Link
              to="/blog"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <a
              href="https://ifleon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Portal
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {isHomePage ? (
              <>
                {['Services', 'About', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </>
            )}
            <Link
              to="/blog"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://ifleon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            >
              Portal
            </a>
          </div>
        )}
      </div>
    </header>
  );
};