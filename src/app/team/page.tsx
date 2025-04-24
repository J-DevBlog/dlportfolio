'use client';

import Navigation from '@/components/Navigation';

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="pt-20 pb-20 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Our Team</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-4">
              DL active의 전문가들이 여러분의 성공을 함께 만들어갑니다
            </p>
            <p className="text-lg text-gray-600">
              각 분야의 전문성과 풍부한 경험을 바탕으로 최상의 서비스를 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                {/* Add team member photo here */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">홍길동</h3>
              <p className="text-gray-600 mb-2">CEO</p>
              <p className="text-gray-500 text-sm">
                15년간의 HR 컨설팅 경험을 바탕으로<br />
                최적의 인재 매칭 서비스를 제공합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                {/* Add team member photo here */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">김철수</h3>
              <p className="text-gray-600 mb-2">COO</p>
              <p className="text-gray-500 text-sm">
                현장 운영 전문가로서<br />
                체계적인 프로젝트 관리를 담당합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                {/* Add team member photo here */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">이영희</h3>
              <p className="text-gray-600 mb-2">Director</p>
              <p className="text-gray-500 text-sm">
                10년 이상의 마케팅 경험으로<br />
                효과적인 프로모션 전략을 수립합니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#1a1f27] text-gray-400 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">DL active</h3>
            <p className="mb-2">서울특시 강남구 테헤란로 123</p>
            <p>사업자등록번호: 123-45-67890</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Tel: 02-123-4567</p>
            <p>Email: your.email@example.com</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <p className="mb-2">개인정보처리방침</p>
            <p>이용약관</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">© 2025 DL active. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 