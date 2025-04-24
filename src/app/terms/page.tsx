'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">이용약관</h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제1조 (목적)</h2>
            <p className="text-gray-600 leading-relaxed">
              이 약관은 DL active(이하 '회사')가 제공하는 서비스의 이용조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제2조 (정의)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>서비스: 회사가 제공하는 모든 서비스를 의미합니다.</li>
              <li>이용자: 회사의 서비스를 이용하는 개인 또는 법인을 의미합니다.</li>
              <li>약관: 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무를 규정한 문서를 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
            <p className="text-gray-600 leading-relaxed">
              1. 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.<br />
              2. 회사는 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
              3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제4조 (서비스의 제공)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              회사는 다음과 같은 서비스를 제공합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>이벤트 운영 대행 서비스</li>
              <li>인력 관리 및 컨설팅 서비스</li>
              <li>현장 운영 및 관리 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제5조 (서비스 이용계약의 성립)</h2>
            <p className="text-gray-600 leading-relaxed">
              1. 서비스 이용계약은 이용자가 서비스 이용을 신청하고 회사가 이를 승낙함으로써 성립됩니다.<br />
              2. 회사는 서비스 이용을 신청한 이용자에게 특별한 사유가 없는 한 서비스 이용을 승낙합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제6조 (이용자의 의무)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>서비스 신청 또는 변경 시 허위내용의 등록</li>
              <li>회사가 제공하는 서비스에 대한 허가되지 않은 변경</li>
              <li>회사 또는 제3자의 지적재산권 침해</li>
              <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>기타 관련 법령에서 금지하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제7조 (책임제한)</h2>
            <p className="text-gray-600 leading-relaxed">
              1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.<br />
              2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제8조 (준거법 및 관할법원)</h2>
            <p className="text-gray-600 leading-relaxed">
              1. 이 약관의 해석 및 적용에는 대한민국 법률이 적용됩니다.<br />
              2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 전속적 관할법원으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">부칙</h2>
            <p className="text-gray-600 leading-relaxed">
              이 약관은 2024년 1월 1일부터 시행합니다.
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