'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">개인정보처리방침</h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-600 leading-relaxed">
              DL active(이하 &apos;회사&apos;)는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>고객 문의 응대 및 서비스 제공</li>
              <li>이벤트 운영 및 관리</li>
              <li>서비스 개선 및 개발</li>
              <li>법령 및 정책에 따른 고지사항 전달</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 개인정보의 제3자 제공</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 개인정보 보호책임자</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                ▶ 개인정보 보호책임자<br />
                성명: 이동관<br />
                직책: CEO<br />
                연락처: admin@dlactive.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 개인정보처리방침의 변경</h2>
            <p className="text-gray-600 leading-relaxed">
              이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1f27] text-gray-400 py-16 mt-16">
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
            <Link href="/privacy-policy" className="block mb-2 hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="block hover:text-white transition-colors">이용약관</Link>
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