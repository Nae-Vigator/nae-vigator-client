import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function UserInfoPage() {
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const abroadRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <h1 className="typo-h3 text-foreground mb-8">기본 정보</h1>

      <div className="flex gap-4 mb-8 border-b border-gray-200 pb-2 overflow-x-auto">
        <button
          onClick={() => scrollToSection(personalInfoRef)}
          className="typo-h4 text-primary hover:text-primary whitespace-nowrap"
        >
          인적사항
        </button>
        <button
          onClick={() => scrollToSection(skillsRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          스킬
        </button>
        <button
          onClick={() => scrollToSection(educationRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          학력 및 학점
        </button>
        <button
          onClick={() => scrollToSection(experienceRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          경력
        </button>
        <button
          onClick={() => scrollToSection(activitiesRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          대외활동
        </button>
        <button
          onClick={() => scrollToSection(trainingRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          교육
        </button>
        <button
          onClick={() => scrollToSection(certificatesRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          자격증 및 어학
        </button>
        <button
          onClick={() => scrollToSection(awardsRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          수상
        </button>
        <button
          onClick={() => scrollToSection(abroadRef)}
          className="typo-h4 text-zinc-300 hover:text-primary whitespace-nowrap"
        >
          해외경험
        </button>
      </div>

      <div ref={personalInfoRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">인적사항</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <Label
                htmlFor="name"
                isRequired
                className="mb-2 text-sm font-medium"
              >
                이름
              </Label>
              <Input id="name" placeholder="홍길동" />
            </div>
            <div>
              <Label
                htmlFor="birthdate"
                isRequired
                className="mb-2 text-sm font-medium"
              >
                생년월일
              </Label>
              <Input id="birthdate" placeholder="0000.00.00" />
            </div>
            <div>
              <Label
                htmlFor="gender"
                isRequired
                className="mb-2 text-sm font-medium"
              >
                성별
              </Label>
              <select
                id="gender"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">성별 선택</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>
            <div>
              <Label
                htmlFor="email"
                isRequired
                className="mb-2 text-sm font-medium"
              >
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ava.wright@gmail.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label
                htmlFor="phone"
                isRequired
                className="mb-2 text-sm font-medium"
              >
                휴대전화번호
              </Label>
              <Input id="phone" placeholder="010-0000-0000" />
            </div>
            <div>
              <Label htmlFor="address" className="mb-2 text-sm font-medium">
                주소
              </Label>
              <div className="flex gap-2">
                <Input
                  id="address"
                  placeholder="주소 검색"
                  className="flex-1"
                />
                <Button variant="outline">찾기</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="disability" className="w-4 h-4" />
              <label htmlFor="disability" className="text-sm">
                장애
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="military" className="w-4 h-4" />
              <label htmlFor="military" className="text-sm">
                병역
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="veteran" className="w-4 h-4" />
              <label htmlFor="veteran" className="text-sm">
                보훈
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="employment-support"
                className="w-4 h-4"
              />
              <label htmlFor="employment-support" className="text-sm">
                고용지원대상
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="military-status" className="w-4 h-4" />
              <label htmlFor="military-status" className="text-sm">
                병역
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="exemption" className="w-4 h-4" />
              <label htmlFor="exemption" className="text-sm">
                면제
              </label>
            </div>
          </div>
        </div>
      </div>

      <div ref={skillsRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">스킬</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Label className="mb-2 text-sm font-medium">
                무엇이든 스킬을 입력하요?
              </Label>
            </div>
            <div className="border border-gray-200 rounded-md p-4 min-h-[100px]">
              <Input placeholder="내가 선택한 직군 (4/20)" className="mb-2" />
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                  스킬 1
                  <button className="text-gray-500 hover:text-black">
                    &times;
                  </button>
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                  스킬 2
                  <button className="text-gray-500 hover:text-black">
                    &times;
                  </button>
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                  스킬 3
                  <button className="text-gray-500 hover:text-black">
                    &times;
                  </button>
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                  스킬 4
                  <button className="text-gray-500 hover:text-black">
                    &times;
                  </button>
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                + 초기화
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={educationRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">학력 및 학점</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">학력 및 학점</h3>
            <Button variant="outline" size="sm">
              + 추가하기
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label
                  htmlFor="school-category"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  학교 구분
                </Label>
                <select
                  id="school-category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">학교 구분</option>
                  <option value="high">고등학교</option>
                  <option value="college">대학교(2,3년)</option>
                  <option value="university">대학교(4년)</option>
                  <option value="graduate">대학원</option>
                </select>
              </div>
              <div>
                <Label
                  htmlFor="school-name"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  학교명
                </Label>
                <Input id="school-name" placeholder="학교명" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <Label
                  htmlFor="graduation-status"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  졸업여부
                </Label>
                <select
                  id="graduation-status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">졸업여부</option>
                  <option value="graduated">졸업</option>
                  <option value="expected">졸업예정</option>
                  <option value="attending">재학중</option>
                  <option value="dropped">중퇴</option>
                </select>
              </div>
              <div>
                <Label
                  htmlFor="entrance-date"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  입학일자
                </Label>
                <Input id="entrance-date" placeholder="0000" />
              </div>
              <div>
                <Label
                  htmlFor="graduation-date"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  졸업일자
                </Label>
                <Input id="graduation-date" placeholder="0000.00" />
              </div>
              <div className="flex items-end">
                <Button variant="outline" className="w-full">
                  대입면접응시
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <Label
                  htmlFor="major"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  전공명
                </Label>
                <Input id="major" placeholder="전공명" />
              </div>
              <div>
                <Label
                  htmlFor="credit"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  학점
                </Label>
                <Input
                  id="credit"
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                />
              </div>
              <div>
                <Label
                  htmlFor="credit-scale"
                  isRequired
                  className="mb-2 text-sm font-medium"
                >
                  만점 기준
                </Label>
                <select
                  id="credit-scale"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">기준점</option>
                  <option value="4.0">4.0</option>
                  <option value="4.3">4.3</option>
                  <option value="4.5">4.5</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" id="new-student" className="w-4 h-4" />
              <label htmlFor="new-student" className="text-sm">
                새로 목적 입학
              </label>
            </div>

            <div>
              <Label htmlFor="description" className="mb-2 text-sm font-medium">
                특기 사항
              </Label>
              <Textarea
                id="description"
                placeholder="Enter a description..."
                className="min-h-[80px]"
              />
            </div>

            <div className="flex justify-end mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-800"
              >
                삭제
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div ref={experienceRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">경력 (추후 구현 예정)</h2>
      </div>

      <div ref={activitiesRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">대외활동 (추후 구현 예정)</h2>
      </div>

      <div ref={trainingRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">교육 (추후 구현 예정)</h2>
      </div>

      <div ref={certificatesRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">
          자격증 및 어학 (추후 구현 예정)
        </h2>
      </div>

      <div ref={awardsRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">수상 (추후 구현 예정)</h2>
      </div>

      <div ref={abroadRef} className="mb-12">
        <h2 className="typo-p text-zinc-600 mb-6">해외경험 (추후 구현 예정)</h2>
      </div>
    </div>
  );
}

export default UserInfoPage;
