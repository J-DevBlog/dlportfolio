'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUsers } from 'react-icons/fa';
import { MdSupervisorAccount } from 'react-icons/md';
import { FaStar, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Loading from '@/components/Loading';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:your.email@example.com?subject=문의: ${formData.name}&body=${formData.message}%0D%0A%0D%0A보낸사람: ${formData.email}`;
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 snap-y snap-mandatory overflow-y-scroll">
      <Navigation />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 snap-start relative">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-6">
            디엘 <span className="text-4xl">active</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">사람과 기회를 연결하여, 더 나은 내일을 함께 만듭니다.</p>
          <div className="space-x-4">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
              문의하기
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              더 알아보기
            </button>
          </div>
        </div>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="flex flex-col items-center mb-2" style={{ gap: '-0.1rem' }}>
            <div className="text-white text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0s' }}>∨</div>
            <div className="text-white text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0.2s' }}>∨</div>
            <div className="text-white text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0.4s' }}>∨</div>
          </div>
          <span className="text-white text-xs tracking-widest font-thin" style={{ fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: '0.4em' }}>SCROLL</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center bg-[#f0f2f7] snap-start">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">About Us</h2>
          <div className="mx-auto text-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              우리는 사람의 잠재력을 믿고, 그 가능성을 현실로 연결합니다.
            </p>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              변화하는 시대 속에서 유연하게 움직이며, <span className="text-orange-500">진심</span>과 <span className="text-orange-500">신뢰</span>를 바탕으로
            </p>
            <p className="text-xl font-semibold text-gray-700 mb-16">
              최고의 인재와 기회를 이어주는
              <span className="text-xl font-bold text-white bg-navy-600 px-2 py-1 rounded ml-1" style={{ backgroundColor: '#1a365d' }}>Creative Partner</span>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="business" className="h-screen flex items-center justify-center bg-[#f8f9fc] snap-start">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Our Business</h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group mb-12 inline-block">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
                <h3 className="text-3xl font-bold text-center text-gray-800 relative z-10 px-4">현장운영대행</h3>
              </div>
            </div>
            <div className="relative flex justify-center mb-16">
              <div className="absolute h-16 w-0.5 bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaUsers className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">인력 컨설팅</h3>
                <p className="text-gray-600 text-center relative z-10">
                  전문성과 경험을 갖춘
                  <br />최적의 인재 매칭
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-50"></div>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <MdSupervisorAccount className="text-4xl text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">슈퍼바이저</h3>
                <p className="text-gray-600 text-center relative z-10">
                  체계적인 현장 관리로
                  <br />최상의 서비스 제공
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-transparent opacity-50"></div>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaStar className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">프로모터</h3>
                <p className="text-gray-600 text-center relative z-10">
                  브랜드 가치를 높이는
                  <br />질문 좋은 서비스
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="h-screen flex items-center bg-white snap-start" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">프로젝트 1</h3>
              <p className="text-gray-600 text-lg">프로젝트 설명이 들어갑니다.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">프로젝트 2</h3>
              <p className="text-gray-600 text-lg">프로젝트 설명이 들어갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center bg-white snap-start">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-lg" />
                Send
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-xl text-gray-600 mb-4">
                또는 직접 연락하기
              </p>
              <p className="text-xl text-gray-600 mb-8 font-semibold">
                Email: your.email@example.com
              </p>
              <div className="space-x-8">
                <a href="https://github.com" className="text-xl text-gray-600 hover:text-gray-900 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" className="text-xl text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">DL active</h3>
                <p className="text-sm">
                  서울특별시 강남구 테헤란로 123<br />
                  사업자등록번호: 123-45-67890
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                <p className="text-sm">
                  Tel: 02-123-4567<br />
                  Email: your.email@example.com
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      이용약관
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} DL active. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gray-900/80 text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-900 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="맨 위로 스크롤"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
