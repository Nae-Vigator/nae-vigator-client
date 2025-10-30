import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import navi from '@/assets/images/navi.svg';

function Signup() {
  const [selectedJob, setSelectedJob] = useState('디자인');
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const jobs = ['개발', '디자인', '기획'];

  return (
    <div className="min-h-screen w-full bg-[#1D1B2B] flex justify-center items-center p-4">
      <div
        className="w-full max-w-[1600px] max-h-[900px] flex items-center justify-between px-[8%]"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="flex items-center gap-4 mr-16">
          <img src={logo} alt="로고" className="w-[100px]" />
          <img src={navi} alt="내:비게이터" className="w-[250px]" />
        </div>

        <div
          className="bg-white p-12 w-full max-w-[620px] shadow-xl"
          style={{ borderRadius: '12px' }}
        >
          <div className="w-full pl-2">
            <h1
              className="text-[22px] font-bold text-black mb-2"
              style={{ textAlign: 'left' }}
            >
              환영해요 ooo님!
            </h1>
            <p
              className="text-[14px] text-gray-500 mb-10"
              style={{ textAlign: 'left' }}
            >
              취업 준비중인 직군을 선택해주세요.
            </p>
          </div>

          <div className="mb-8 pl-2">
            <label
              className="block text-[14px] font-medium text-black mb-3"
              style={{ textAlign: 'left' }}
            >
              직군 선택 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)}
                className="w-full px-4 py-1 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-gray-400 transition-colors text-[15px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-gray-400">직군을 선택해주세요.</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isJobDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isJobDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span
                        className="text-[14px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        추가 직군 검색하기
                      </span>
                    </div>
                  </div>
                  <div>
                    {jobs.map((job) => (
                      <button
                        key={job}
                        onClick={() => {
                          setSelectedJob(job);
                          setIsJobDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between text-[15px] transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="text-gray-900">{job}</span>
                        {selectedJob === job && (
                          <svg
                            className="w-5 h-5 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-10 pl-2">
            <label className="block text-[14px] font-medium text-black mb-3 text-left">
              상세 직무 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="상세 직무를 입력해주세요."
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[15px] placeholder-gray-400"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <button
            className="w-20 py-3.5 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-[15px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
