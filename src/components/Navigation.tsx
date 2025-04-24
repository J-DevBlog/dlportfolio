'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
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
    handleScroll(); // 초기 상태 설정
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  const scrollToSection = (sectionId: string) => {
    if (!isMainPage) {
      // 메인 페이지가 아닐 경우, 메인 페이지로 이동 후 해당 섹션으로 스크롤
      window.location.href = `/#${sectionId}`;
    } else {
      // 메인 페이지일 경우, 해당 섹션으로 스크롤
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setShowAboutDropdown(false);
      }
    }
  };

  return (
    <nav className={`fixed w-full bg-[#2D3441] z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            DL active
          </Link>
          
          <div className="flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button
                className="text-gray-300 hover:text-white flex items-center"
              >
                About <FaChevronDown className="ml-1 text-sm" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${
                  showAboutDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </button>
                <Link 
                  href="/team" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowAboutDropdown(false)}
                >
                  Team
                </Link>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('business')}
              className="text-gray-300 hover:text-white"
            >
              Business
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 