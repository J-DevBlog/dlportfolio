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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* 이동관 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">이동관 / LEE DONG KWAN</div>
                <div className="font-normal text-sm text-gray-400">Representative</div>
              </div>
            </div>
            {/* 박진수 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">박진수 / PARK JIN SU</div>
                <div className="font-normal text-sm text-gray-400">Team Leader</div>
              </div>
            </div>
            {/* 정영록 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">정영록 / JEONG YEONG ROK</div>
                <div className="font-normal text-sm text-gray-400">Content Designer</div>
              </div>
            </div>
            {/* 노용걸 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">노용걸 / NO YONG GEOL</div>
                <div className="font-normal text-sm text-gray-400">Operations Manager</div>
              </div>
            </div>
            {/* 윤상준 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">윤상준 / YOON SANG JUN</div>
                <div className="font-normal text-sm text-gray-400">HR Manager</div>
              </div>
            </div>
            {/* 이예림 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[80px] font-[pretendard]">
              <div className="text-center">
                <div className="font-bold text-base text-[#1a1f27] mb-1">이예림 / LEE YE LIM</div>
                <div className="font-normal text-sm text-gray-400">Admin Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#1a1f27] text-gray-400 py-16">
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
            <p className="mb-2">개인정보처리방침</p>
            <p>이용약관</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">© 2025 DL active. All rights reserved.</p>
          <p className="text-center text-sm mt-2">Made by Jeun, DL active dev team</p>
        </div>
      </footer>
    </div>
  );
} 