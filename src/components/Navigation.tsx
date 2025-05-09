'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (!isMainPage || window.scrollY > window.innerHeight * 0.5) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  const scrollToSection = (sectionId: string) => {
    if (!isMainPage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setShowAboutDropdown(false);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed w-full bg-[#3d2b1f]/90 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#a89b8e]">
            <span className="text-[#3d2b1f] font-black">DL</span> active
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#a89b8e] hover:text-[#bfae99]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button className="text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e] flex items-center">
                About <FaChevronDown className="ml-1 text-sm" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-[#f8f9fc] rounded-md shadow-lg py-1 transition-all duration-200 ${
                showAboutDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-sm text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e] hover:bg-[#f0e9dd] hover:text-[#bfae99]"
                >
                  About Us
                </button>
                <Link 
                  href="/team" 
                  className="block px-4 py-2 text-sm text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e] hover:bg-[#f0e9dd] hover:text-[#bfae99]"
                  onClick={() => setShowAboutDropdown(false)}
                >
                  Team
                </Link>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('business')}
              className="text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e]"
            >
              Business
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e]"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#a89b8e] font-extrabold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#a89b8e]"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            <div className="relative">
              <button
                onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                className="text-[#a89b8e] hover:text-[#bfae99] flex items-center justify-between w-full"
              >
                About <FaChevronDown className={`transition-transform duration-200 ${showAboutDropdown ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 space-y-2 pl-4 ${showAboutDropdown ? 'block' : 'hidden'}`}>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-[#a89b8e] hover:text-[#bfae99] w-full text-left"
                >
                  About Us
                </button>
                <Link 
                  href="/team" 
                  className="block text-[#a89b8e] hover:text-[#bfae99]"
                  onClick={() => {
                    setShowAboutDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Team
                </Link>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('business')}
              className="text-[#a89b8e] hover:text-[#bfae99] text-left"
            >
              Business
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#a89b8e] hover:text-[#bfae99] text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#a89b8e] hover:text-[#bfae99] text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 