'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar, FaArrowUp, FaEnvelope, FaMusic, FaStore, FaGlassCheers, FaBuilding } from 'react-icons/fa';
import { MdSupervisorAccount, MdGroups } from 'react-icons/md';
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
    window.location.href = `mailto:kwan@dlactive.com?subject=문의: ${formData.name}&body=${formData.message}%0D%0A%0D%0A보낸사람: ${formData.email}`;
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#FFFBEF] snap-y snap-mandatory overflow-y-scroll">
      <Navigation />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-[#FFFBEF] snap-start relative">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black text-[#222] mb-4 md:mb-6 tracking-tight font-[pretendard] text-center">
            DL <span className="text-4xl md:text-6xl text-[#3d2b1f] font-black">active</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#222] mb-6 md:mb-8 leading-normal font-[pretendard] font-extrabold">
            사람과 기회를 연결하여, 더 나은 내일을 함께 만듭니다.
          </p>
          <div className="space-x-4">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#222] border-2 border-[#222] text-[#FFFBEF] px-4 md:px-6 py-2 md:py-3 rounded-full font-black hover:bg-[#3d2b1f] hover:border-[#3d2b1f] hover:text-[#FFFBEF] transition-colors text-sm md:text-base">
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
            <div className="text-black text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0s' }}>∨</div>
            <div className="text-black text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0.2s' }}>∨</div>
            <div className="text-black text-sm" style={{ transform: 'scaleX(6)', animation: 'blink 1.5s infinite', animationDelay: '0.4s' }}>∨</div>
          </div>
          <span className="text-black text-xs tracking-widest font-thin" style={{ fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: '0.4em' }}>SCROLL</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-32 pb-16 flex items-start bg-[#FFFBEF] snap-start">
        <div className="container ml-0 px-4 max-w-5xl">
          <div className="text-black text-4xl md:text-6xl font-extrabold tracking-tight mb-32 uppercase text-left drop-shadow" style={{ fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif', letterSpacing: '0.04em' }}>
            ABOUT US
          </div>
          <div className="space-y-12 text-left">
            <p className="text-2xl md:text-5xl font-black text-black" style={{ fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif', fontWeight: 700 }}>
              최고의 인재와 기회를 이어주는<br />
              <span className="font-bold relative custom-underline">Creative Partner</span>
            </p>
            <p className="text-2xl md:text-5xl font-black text-black" style={{ fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif', fontWeight: 700 }}>
              고객사의 입장에 서서 공감을 통해 진실과 신뢰를<br className="block md:hidden" /><span className="block md:inline mb-4"></span>
              바탕으로 완벽한 행사를 함께 만들어내는
            </p>
            <p className="mt-12 relative inline-block">
              {/* 배경 타이포그래피 */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
                style={{
                  fontSize: '13vw',
                  color: '#bfae99',
                  opacity: 0.12,
                  fontWeight: 900,
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.04em',
                  userSelect: 'none',
                  fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif',
                }}
              >
                DL ACTIVE
              </span>
              {/* 전면 DL/active */}
              <span className="relative z-10">
                <span
                  className="font-extrabold text-6xl md:text-8xl text-[#3d2b1f]"
                  style={{
                    fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  DL
                </span>
                <span
                  className="font-light text-3xl md:text-5xl text-[#3d2b1f] ml-2 align-bottom"
                  style={{
                    fontFamily: 'Pretendard, Noto Sans KR, Helvetica, Arial, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  active
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="business" className="min-h-screen py-32 flex items-center justify-center bg-[#f8f9fc] snap-start">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-16 text-[#3d2b1f]">Our Business</h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="flex flex-col items-center p-4 bg-[#FFFBEF] rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group mb-8 md:mb-12 inline-block">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc] to-transparent opacity-50"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#3d2b1f] relative z-10 px-4 tracking-tight">현장운영대행</h3>
              </div>
            </div>
            <div className="relative flex justify-center mb-8 md:mb-16">
              <div className="w-32 h-0.5 bg-[#bfae99]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-16">
              <div className="flex flex-col items-center p-6 md:p-8 bg-[#FFFBEF] rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc] to-transparent opacity-50"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#bfae99] rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaMusic className="text-3xl md:text-4xl text-[#FFFBEF]" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-[#3d2b1f] mb-2 text-center relative z-10 tracking-tight">FESTIVAL & CONCERT</h3>
                <p className="text-sm md:text-base text-[#6b4c1b] text-center relative z-10 mt-2">페스티벌과 콘서트의 성공적인 운영을 위한 전문 서비스</p>
              </div>
              <div className="flex flex-col items-center p-6 md:p-8 bg-[#FFFBEF] rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc] to-transparent opacity-50"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#bfae99] rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaStore className="text-3xl md:text-4xl text-[#FFFBEF]" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-[#3d2b1f] mb-2 text-center relative z-10 tracking-tight">POP-UP STORE</h3>
                <p className="text-sm md:text-base text-[#6b4c1b] text-center relative z-10 mt-2">브랜드의 가치를 높이는 팝업스토어 운영</p>
              </div>
              <div className="flex flex-col items-center p-6 md:p-8 bg-[#FFFBEF] rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc] to-transparent opacity-50"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#bfae99] rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaGlassCheers className="text-3xl md:text-4xl text-[#FFFBEF]" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-[#3d2b1f] mb-2 text-center relative z-10 tracking-tight">BRAND PARTY</h3>
                <p className="text-sm md:text-base text-[#6b4c1b] text-center relative z-10 mt-2">브랜드의 스토리를 담은 브랜드 파티 운영</p>
              </div>
              <div className="flex flex-col items-center p-6 md:p-8 bg-[#FFFBEF] rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc] to-transparent opacity-50"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#bfae99] rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 transform transition-transform group-hover:scale-110">
                  <FaBuilding className="text-3xl md:text-4xl text-[#FFFBEF]" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-[#3d2b1f] mb-2 text-center relative z-10 tracking-tight">CORPORATE EVENT</h3>
                <p className="text-sm md:text-base text-[#6b4c1b] text-center relative z-10 mt-2">기업의 성공적인 이벤트를 위한 전문 운영 서비스</p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="relative flex justify-center mb-8 md:mb-16">
              <div className="w-32 h-0.5 bg-[#bfae99]"></div>
            </div>

            {/* 하위 3개 항목 */}
            <div className="max-w-5xl mx-auto">
              <h4 className="text-xl font-semibold text-[#3d2b1f] mb-8 text-center">Support Service</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col items-center p-3 md:p-5 bg-[#FFFBEF] rounded-lg shadow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/50 to-transparent opacity-50"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#bfae99] rounded-full flex items-center justify-center mb-2 md:mb-3 relative z-10 transform transition-transform group-hover:scale-110">
                    <MdGroups className="text-2xl md:text-3xl text-[#FFFBEF]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#3d2b1f] mb-1 md:mb-2 text-center relative z-10">인력 컨설팅</h3>
                  <p className="text-xs md:text-sm text-[#6b4c1b] text-center relative z-10">전문성과 경험을 갖춘 최적의 인재 매칭</p>
                </div>
                <div className="flex flex-col items-center p-3 md:p-5 bg-[#FFFBEF] rounded-lg shadow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/50 to-transparent opacity-50"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#bfae99] rounded-full flex items-center justify-center mb-2 md:mb-3 relative z-10 transform transition-transform group-hover:scale-110">
                    <MdSupervisorAccount className="text-2xl md:text-3xl text-[#FFFBEF]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#3d2b1f] mb-1 md:mb-2 text-center relative z-10">슈퍼바이저</h3>
                  <p className="text-xs md:text-sm text-[#6b4c1b] text-center relative z-10">체계적인 현장 관리로 최상의 서비스 제공</p>
                </div>
                <div className="flex flex-col items-center p-3 md:p-5 bg-[#FFFBEF] rounded-lg shadow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/50 to-transparent opacity-50"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#bfae99] rounded-full flex items-center justify-center mb-2 md:mb-3 relative z-10 transform transition-transform group-hover:scale-110">
                    <FaStar className="text-2xl md:text-3xl text-[#FFFBEF]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#3d2b1f] mb-1 md:mb-2 text-center relative z-10">프로모터</h3>
                  <p className="text-xs md:text-sm text-[#6b4c1b] text-center relative z-10">브랜드의 얼굴로 고객을 현장에서 연결하는<br />서비스</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="h-screen flex items-center bg-[#f3f4f6] snap-start" id="projects">
        <div className="container mx-auto px-4">
          <div className="relative flex justify-center items-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-center text-[#3d2b1f]">Projects</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-[#6b4c1b]">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center bg-[#fdf6ee] snap-start pt-40">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-16 text-[#3d2b1f]">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-[#FFFBEF] p-6 md:p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-base md:text-lg font-semibold text-[#3d2b1f] mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-[#bfae99] rounded-lg focus:ring-2 focus:ring-[#bfae99] focus:border-transparent bg-white text-[#3d2b1f]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-semibold text-[#3d2b1f] mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-[#bfae99] rounded-lg focus:ring-2 focus:ring-[#bfae99] focus:border-transparent bg-white text-[#3d2b1f]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base md:text-lg font-semibold text-[#3d2b1f] mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-[#bfae99] rounded-lg focus:ring-2 focus:ring-[#bfae99] focus:border-transparent bg-white text-[#3d2b1f]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#bfae99] text-[#FFFBEF] py-2 md:py-3 px-4 md:px-6 rounded-lg font-black hover:bg-[#3d2b1f] hover:text-[#FFFBEF] transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaEnvelope className="text-base md:text-lg" />
                Send
              </button>
            </form>
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-lg md:text-xl text-[#6b4c1b] mb-4">
                또는 직접 연락하기
              </p>
              <p className="text-lg md:text-xl text-[#3d2b1f] mb-6 md:mb-8 font-semibold">
                Email: admin@dlactive.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d2b1f] text-white py-16 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">DL active</h3>
            <p className="mb-2">서울특별시 강남구 선릉로 76길, 12 801호</p>
            <p>사업자등록번호: 275-81-03333</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Tel: +82 10-5127-6476</p>
            <p>Email: admin@dlactive.com</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <Link href="/privacy-policy" className="block mb-2 hover:text-[#bfae99] transition-colors text-white">개인정보처리방침</Link>
            <Link href="/terms" className="block hover:text-[#bfae99] transition-colors text-white">이용약관</Link>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white">
          <p className="text-center text-sm">© 2025 DL active. All rights reserved.</p>
          <p className="text-center text-sm mt-2">Made by Jeun, DL active dev team</p>
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
