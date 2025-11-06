import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EducationItem as EducationItemComponent } from './EducationItem';
import { ActivityItem as ActivityItemComponent } from './ActivityItem';
import type { EducationItem as EducationType, ActivityItem as ActivityType } from './types';

type TabType =
  | 'personal'
  | 'skills'
  | 'education'
  | 'experience'
  | 'activities'
  | 'training'
  | 'certificates'
  | 'awards'
  | 'abroad';

// Daum Postcode API 타입 선언
declare global {
  interface Window {
    daum: {
      Postcode: new (config: {
        oncomplete: (data: { address: string; zonecode: string }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

function UserInfoPage() {
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [educationList, setEducationList] = useState<EducationType[]>(() => {
    // localStorage에서 불러오기
    const saved = localStorage.getItem('educationList');
    return saved ? JSON.parse(saved) : [];
  });

  const [activityList, setActivityList] = useState<ActivityType[]>(() => {
    const saved = localStorage.getItem('activityList');
    return saved ? JSON.parse(saved) : [];
  });

  const personalInfoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const abroadRef = useRef<HTMLDivElement>(null);

  // educationList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('educationList', JSON.stringify(educationList));
  }, [educationList]);

  // activityList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('activityList', JSON.stringify(activityList));
  }, [activityList]);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    tab: TabType,
  ) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setAddress(data.address);
      },
    }).open();
  };

  const addEducation = () => {
    const newEducation: EducationType = {
      id: Date.now().toString(),
      schoolType: '',
      schoolName: '',
      major: '',
      startDate: '',
      endDate: '',
      grade: '',
      maxGrade: '',
      status: '',
      majorType: '',
      thesis: '',
    };
    setEducationList([...educationList, newEducation]);
  };

  const removeEducation = (id: string) => {
    setEducationList(educationList.filter((item) => item.id !== id));
  };

  const updateEducation = (
    id: string,
    field: keyof EducationType,
    value: string,
  ) => {
    setEducationList(
      educationList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addActivity = () => {
    const newActivity: ActivityType = {
      id: Date.now().toString(),
      activityType: '',
      organization: '',
      startDate: '',
      endDate: '',
      employed: '',
      description: '',
      task: '',
    };
    setActivityList([...activityList, newActivity]);
  };

  const removeActivity = (id: string) => {
    setActivityList(activityList.filter((item) => item.id !== id));
  };

  const updateActivity = (
    id: string,
    field: keyof ActivityType,
    value: string,
  ) => {
    setActivityList(
      activityList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  return (
    <div className="w-full">
      <h3 className="typo-h3 text-foreground mb-8">기본 정보</h3>

      <div className="flex items-center justify-between mb-8 overflow-x-auto">
        <div className="flex gap-16">
          <button
            onClick={() => scrollToSection(personalInfoRef, 'personal')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'personal' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            인적사항
          </button>
          <button
            onClick={() => scrollToSection(skillsRef, 'skills')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'skills' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            스킬
          </button>
          <button
            onClick={() => scrollToSection(educationRef, 'education')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'education' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            학력 및 학점
          </button>
          <button
            onClick={() => scrollToSection(experienceRef, 'experience')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'experience' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            경력
          </button>
          <button
            onClick={() => scrollToSection(activitiesRef, 'activities')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'activities' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            대외활동
          </button>
          <button
            onClick={() => scrollToSection(trainingRef, 'training')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'training' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            교육
          </button>
          <button
            onClick={() => scrollToSection(certificatesRef, 'certificates')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'certificates' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            자격증 및 어학
          </button>
          <button
            onClick={() => scrollToSection(awardsRef, 'awards')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'awards' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            수상
          </button>
          <button
            onClick={() => scrollToSection(abroadRef, 'abroad')}
            className={`typo-h4 whitespace-nowrap ${
              activeTab === 'abroad' ? 'text-foreground' : 'text-zinc-400'
            }`}
          >
            해외경험
          </button>
        </div>

        <div className="text-sm whitespace-nowrap ml-4">
          <span className="text-foreground">최종 저장 2024/08/24/12:00</span>
        </div>
      </div>

      <div ref={personalInfoRef} className="mb-12">
        <p className="typo-p text-foreground mb-6">인적사항</p>

        <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-40 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-[repeating-conic-gradient(#e5e7eb_0%_25%,transparent_0%_50%)_0_0/20px_20px] flex-shrink-0">
                <span className="text-gray-400 text-sm">사진</span>
              </div>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-black/90"
              >
                사진 업로드
              </Button>
            </div>

            <div className="flex-1">
              <div className="flex gap-4 mb-4">
                <div className="w-48">
                  <Label
                    htmlFor="name"
                    isRequired
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    이름
                  </Label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    className="bg-white text-foreground h-11"
                  />
                </div>
                <div className="w-48">
                  <Label
                    htmlFor="birthdate"
                    isRequired
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    생년월일
                  </Label>
                  <Input
                    id="birthdate"
                    placeholder="0000.00.00"
                    className="bg-white text-foreground h-11"
                  />
                </div>
                <div className="w-32">
                  <Label
                    htmlFor="gender"
                    isRequired
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    성별
                  </Label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={`flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ${
                      gender === '' ? 'text-zinc-400' : 'text-foreground'
                    }`}
                  >
                    <option value="" disabled hidden>
                      성별 선택
                    </option>
                    <option value="male" className="text-foreground">
                      남성
                    </option>
                    <option value="female" className="text-foreground">
                      여성
                    </option>
                  </select>
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="email"
                    isRequired
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ava.wright@gmail.com"
                    className="bg-white text-foreground h-11"
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-48">
                  <Label
                    htmlFor="phone"
                    isRequired
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    휴대전화번호
                  </Label>
                  <Input
                    id="phone"
                    placeholder="010-0000-0000"
                    className="bg-white text-foreground h-11"
                  />
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="address"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    주소
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="주소지 검색"
                      className="flex-1 bg-white text-foreground h-11"
                      readOnly
                    />
                    <Button
                      variant="outline"
                      className="text-sm font-medium text-foreground h-11"
                      onClick={handleAddressSearch}
                      type="button"
                    >
                      찾기
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    보훈대상
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    취업보호 대상
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    고용지원금 대상
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    장애
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-foreground">
                    병역
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={skillsRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">스킬</p>
        </div>

        <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200">
          <Label className="text-sm font-medium mb-2 block">
            무엇이든 스킬을 입력하요?
          </Label>
          <Button variant="outline" className="mb-4">
            내가 선택한 직군
          </Button>

          <div className="border border-gray-200 rounded-md p-4 min-h-[120px] bg-white">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                내가 선택한 스킬 (4/20)
                <button className="text-gray-500 hover:text-black">×</button>
              </span>
            </div>
          </div>

          <div className="flex justify-end mt-2">
            <button className="text-sm text-foreground hover:underline flex items-center gap-1">
              <span>초기화</span>
            </button>
          </div>
        </div>
      </div>

      <div ref={educationRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">학력 및 학점</p>
          <Button
            variant="outline"
            size="sm"
            onClick={addEducation}
            disabled={educationList.length > 0}
          >
            + 추가하기
          </Button>
        </div>

        {educationList.map((edu) => (
          <EducationItemComponent
            key={edu.id}
            edu={edu}
            onUpdate={updateEducation}
            onRemove={removeEducation}
          />
        ))}
      </div>

      <div ref={experienceRef} className="mb-12">
        <div className="flex items-center justify-between">
          <p className="typo-p text-foreground">경력</p>
          <Button variant="outline" size="sm">
            + 추가하기
          </Button>
        </div>
      </div>

      <div ref={activitiesRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">대외활동</p>
          <Button
            variant="outline"
            size="sm"
            onClick={addActivity}
          >
            + 추가하기
          </Button>
        </div>

        {activityList.map((activity) => (
          <ActivityItemComponent
            key={activity.id}
            activity={activity}
            onUpdate={updateActivity}
            onRemove={removeActivity}
          />
        ))}
      </div>

      <div ref={trainingRef} className="mb-12">
        <div className="flex items-center justify-between">
          <p className="typo-p text-foreground">교육</p>
          <Button variant="outline" size="sm">
            + 추가하기
          </Button>
        </div>
      </div>

      <div ref={certificatesRef} className="mb-12">
        <div className="flex items-center justify-between">
          <p className="typo-p text-foreground">자격증 및 어학</p>
          <Button variant="outline" size="sm">
            + 추가하기
          </Button>
        </div>
      </div>

      <div ref={awardsRef} className="mb-12">
        <div className="flex items-center justify-between">
          <p className="typo-p text-foreground">수상</p>
          <Button variant="outline" size="sm">
            + 추가하기
          </Button>
        </div>
      </div>

      <div ref={abroadRef} className="mb-12">
        <div className="flex items-center justify-between">
          <p className="typo-p text-foreground">해외경험</p>
          <Button variant="outline" size="sm">
            + 추가하기
          </Button>
        </div>
      </div>

      <div className="flex justify-end mt-8 mb-8">
        <Button className="bg-black text-white hover:bg-black/90 px-6">
          내 기본 정보 저장
        </Button>
      </div>
    </div>
  );
}

export default UserInfoPage;
