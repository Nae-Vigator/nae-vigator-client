import { useState } from 'react';
import LogoIcon from '@/components/common/LogoIcon';
import LogoTitle from '@/components/common/LogoTitle';

interface SignupPageProps {
  userName?: string;
}

function SignupPage({ userName = '예시' }: SignupPageProps) {
  const [selectedJob, setSelectedJob] = useState('디자인');
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
  const [detailedJob, setDetailedJob] = useState('');
  const [jobSearch, setJobSearch] = useState('');

  const jobs = ['개발', '디자인', '기획'];

  const handleJobSearchSubmit = () => {
    if (jobSearch.trim()) {
      setSelectedJob(jobSearch.trim());
      setIsJobDropdownOpen(false);
      setJobSearch('');
    }
  };

  const handleJobSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJobSearchSubmit();
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen w-full bg-[#1D1B2B] flex justify-center items-center p-4">
      <div
        className="w-full max-w-[1600px] max-h-[900px] flex items-center justify-between px-[8%]"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="flex items-center gap-4 mr-16">
          <LogoIcon className="w-[100px]" />
          <LogoTitle className="w-[250px]" />
        </div>

        <div className="bg-white py-14 pl-14 pr-20 w-full max-w-[850px] shadow-xl rounded-xl">
          <div className="w-full mb-10">
            <h1 className="typo-h3 text-black mb-2">환영해요 {userName}님!</h1>
            <p className="text-sm font-normal text-muted-foreground">
              취업 준비중인 직군을 선택해주세요.
            </p>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-black mb-3">
              직군 선택 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)}
                className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-gray-400 transition-colors"
              >
                <span
                  className={
                    selectedJob
                      ? 'text-sm font-normal text-black'
                      : 'text-sm font-normal text-gray-400'
                  }
                >
                  {selectedJob || '직군을 선택해주세요.'}
                </span>
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
                        className="w-4 h-4 flex-shrink-0"
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
                      <input
                        type="text"
                        value={jobSearch}
                        onChange={(e) => setJobSearch(e.target.value)}
                        onKeyDown={handleJobSearchKeyDown}
                        placeholder="추가 직군 검색하기"
                        className="flex-1 text-sm font-normal bg-transparent border-none outline-none placeholder-gray-400 text-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    {jobs.map((job) => (
                      <button
                        key={job}
                        onClick={() => {
                          setSelectedJob(job);
                          setIsJobDropdownOpen(false);
                          setJobSearch('');
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between transition-colors"
                      >
                        <span className="text-sm font-normal text-foreground">
                          {job}
                        </span>
                        {selectedJob === job && (
                          <svg
                            className="w-5 h-5 text-black"
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

          <div className="mb-10">
            <label className="block text-sm font-bold text-black mb-3">
              상세 직무 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={detailedJob}
              onChange={(e) => setDetailedJob(e.target.value)}
              placeholder="상세 직무를 입력해주세요."
              className="w-full px-4 py-3 text-sm font-normal border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              선택 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
