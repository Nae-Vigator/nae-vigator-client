import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EducationItem as EducationItemComponent } from './EducationItem';
import { ActivityItem as ActivityItemComponent } from './ActivityItem';
import { CareerItem as CareerItemComponent } from './CareerItem';
import { TrainingItem as TrainingItemComponent } from './TrainingItem';
import { CertificateItem as CertificateItemComponent } from './CertificateItem';
import { AwardItem as AwardItemComponent } from './AwardItem';
import { AbroadItem as AbroadItemComponent } from './AbroadItem';
import type {
  EducationItem as EducationType,
  ActivityItem as ActivityType,
  CareerItem as CareerType,
  TrainingItem as TrainingType,
  CertificateItem as CertificateType,
  AwardItem as AwardType,
  AbroadItem as AbroadType,
} from './types';

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
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [skillSearchInput, setSkillSearchInput] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(() => {
    const saved = localStorage.getItem('selectedSkills');
    return saved ? JSON.parse(saved) : [];
  });
  const [recommendedSkills, setRecommendedSkills] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [educationList, setEducationList] = useState<EducationType[]>(() => {
    const saved = localStorage.getItem('educationList');
    return saved ? JSON.parse(saved) : [];
  });

  const [activityList, setActivityList] = useState<ActivityType[]>(() => {
    const saved = localStorage.getItem('activityList');
    return saved ? JSON.parse(saved) : [];
  });

  const [careerList, setCareerList] = useState<CareerType[]>(() => {
    const saved = localStorage.getItem('careerList');
    return saved ? JSON.parse(saved) : [];
  });

  const [trainingList, setTrainingList] = useState<TrainingType[]>(() => {
    const saved = localStorage.getItem('trainingList');
    return saved ? JSON.parse(saved) : [];
  });

  const [certificateList, setCertificateList] = useState<CertificateType[]>(
    () => {
      const saved = localStorage.getItem('certificateList');
      return saved ? JSON.parse(saved) : [];
    },
  );

  const [awardList, setAwardList] = useState<AwardType[]>(() => {
    const saved = localStorage.getItem('awardList');
    return saved ? JSON.parse(saved) : [];
  });

  const [abroadList, setAbroadList] = useState<AbroadType[]>(() => {
    const saved = localStorage.getItem('abroadList');
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

  useEffect(() => {
    localStorage.setItem('educationList', JSON.stringify(educationList));
  }, [educationList]);

  useEffect(() => {
    localStorage.setItem('activityList', JSON.stringify(activityList));
  }, [activityList]);

  useEffect(() => {
    localStorage.setItem('careerList', JSON.stringify(careerList));
  }, [careerList]);

  useEffect(() => {
    localStorage.setItem('trainingList', JSON.stringify(trainingList));
  }, [trainingList]);

  useEffect(() => {
    localStorage.setItem('certificateList', JSON.stringify(certificateList));
  }, [certificateList]);

  useEffect(() => {
    localStorage.setItem('awardList', JSON.stringify(awardList));
  }, [awardList]);

  useEffect(() => {
    localStorage.setItem('abroadList', JSON.stringify(abroadList));
  }, [abroadList]);

  useEffect(() => {
    localStorage.setItem('selectedSkills', JSON.stringify(selectedSkills));
  }, [selectedSkills]);

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
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

  const addCareer = () => {
    const newCareer: CareerType = {
      id: Date.now().toString(),
      companyName: '',
      department: '',
      startDate: '',
      endDate: '',
      isCurrentlyWorking: false,
      position: '',
      role: '',
      salary: '',
      responsibilities: '',
    };
    setCareerList([...careerList, newCareer]);
  };

  const removeCareer = (id: string) => {
    setCareerList(careerList.filter((item) => item.id !== id));
  };

  const updateCareer = (
    id: string,
    field: keyof CareerType,
    value: string | boolean,
  ) => {
    setCareerList(
      careerList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addTraining = () => {
    const newTraining: TrainingType = {
      id: Date.now().toString(),
      courseName: '',
      institution: '',
      startDate: '',
      endDate: '',
      content: '',
    };
    setTrainingList([...trainingList, newTraining]);
  };

  const removeTraining = (id: string) => {
    setTrainingList(trainingList.filter((item) => item.id !== id));
  };

  const updateTraining = (
    id: string,
    field: keyof TrainingType,
    value: string,
  ) => {
    setTrainingList(
      trainingList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addCertificate = () => {
    const newCertificate: CertificateType = {
      id: Date.now().toString(),
      certificateName: '',
      issuer: '',
      acquisitionDate: '',
    };
    setCertificateList([...certificateList, newCertificate]);
  };

  const removeCertificate = (id: string) => {
    setCertificateList(certificateList.filter((item) => item.id !== id));
  };

  const updateCertificate = (
    id: string,
    field: keyof CertificateType,
    value: string,
  ) => {
    setCertificateList(
      certificateList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addAward = () => {
    const newAward: AwardType = {
      id: Date.now().toString(),
      awardName: '',
      institution: '',
      awardYear: '',
      content: '',
    };
    setAwardList([...awardList, newAward]);
  };

  const removeAward = (id: string) => {
    setAwardList(awardList.filter((item) => item.id !== id));
  };

  const updateAward = (id: string, field: keyof AwardType, value: string) => {
    setAwardList(
      awardList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addAbroad = () => {
    const newAbroad: AbroadType = {
      id: Date.now().toString(),
      country: '',
      startDate: '',
      endDate: '',
      content: '',
    };
    setAbroadList([...abroadList, newAbroad]);
  };

  const removeAbroad = (id: string) => {
    setAbroadList(abroadList.filter((item) => item.id !== id));
  };

  const updateAbroad = (id: string, field: keyof AbroadType, value: string) => {
    setAbroadList(
      abroadList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  // 스킬 검색
  const handleSkillSearch = async (searchTerm: string) => {
    setSkillSearchInput(searchTerm);

    if (!searchTerm.trim()) {
      setRecommendedSkills([]);
      return;
    }

    // 더미 데이터, api 연동 전
    const dummySkills = [
      'React',
      'Vue',
      'Angular',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Python',
      'Java',
      'Spring',
      'Django',
      'AWS',
      'Docker',
      'Kubernetes',
      'Git',
      'Figma',
    ];
    const filtered = dummySkills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setRecommendedSkills(filtered);
  };

  const handleAddSkill = (skill: string) => {
    if (selectedSkills.length >= 20) {
      alert('최대 20개까지 선택 가능합니다.');
      return;
    }
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillSearchInput('');
    setRecommendedSkills([]);
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleResetSkills = () => {
    setSelectedSkills([]);
    setSkillSearchInput('');
    setRecommendedSkills([]);
  };

  const handleSkillKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillSearchInput.trim()) {
      if (recommendedSkills.length > 0) {
        handleAddSkill(recommendedSkills[0]);
      } else {
        handleAddSkill(skillSearchInput.trim());
      }
    }
  };

  return (
    <div>
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
              <div className="w-40 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-[repeating-conic-gradient(#e5e7eb_0%_25%,transparent_0%_50%)_0_0/20px_20px] flex-shrink-0 overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="프로필 사진"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">사진</span>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-black/90"
                onClick={handleImageUploadClick}
                type="button"
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
                      placeholder="주소지 검색"
                      className="flex-1 bg-white text-foreground h-11"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={handleAddressSearch}
                      className="w-11 h-11 bg-black hover:bg-black/90 rounded-md flex items-center justify-center shrink-0"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 14L10.5 10.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
          <div className="relative mb-4">
            <div className="flex items-center gap-2 border border-gray-200 rounded-md bg-white px-3 py-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 14L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                value={skillSearchInput}
                onChange={(e) => handleSkillSearch(e.target.value)}
                onKeyPress={handleSkillKeyPress}
                placeholder="찾으시는 스킬이 있나요?"
                className="flex-1 outline-none text-sm"
              />
            </div>

            {recommendedSkills.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {recommendedSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleAddSkill(skill)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span>{skill}</span>
                    <span className="text-xs text-gray-400">추가하기</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="outline" className="mb-4">
            {/* signup 페이지에서 선택한 직군 데이터 연동해야함 */}
            내가 선택한 직군
          </Button>
          <div className="border border-gray-200 rounded-md p-4 min-h-[120px] bg-white mb-2">
            <p className="text-sm font-medium text-foreground mb-3">
              내가 선택한 스킬 ({selectedSkills.length}/20)
            </p>
            {selectedSkills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex justify-end mt-2">
            <button
              onClick={handleResetSkills}
              className="text-sm text-foreground hover:underline flex items-center gap-1"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 6.5C13 9.81371 10.3137 12.5 7 12.5C3.68629 12.5 1 9.81371 1 6.5C1 3.18629 3.68629 0.5 7 0.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
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
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">경력</p>
          <Button variant="outline" size="sm" onClick={addCareer}>
            + 추가하기
          </Button>
        </div>

        {careerList.map((career) => (
          <CareerItemComponent
            key={career.id}
            career={career}
            onUpdate={updateCareer}
            onRemove={removeCareer}
          />
        ))}
      </div>

      <div ref={activitiesRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">대외활동</p>
          <Button variant="outline" size="sm" onClick={addActivity}>
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
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">교육</p>
          <Button variant="outline" size="sm" onClick={addTraining}>
            + 추가하기
          </Button>
        </div>

        {trainingList.map((training) => (
          <TrainingItemComponent
            key={training.id}
            training={training}
            onUpdate={updateTraining}
            onRemove={removeTraining}
          />
        ))}
      </div>

      <div ref={certificatesRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">자격증 및 어학</p>
          <Button variant="outline" size="sm" onClick={addCertificate}>
            + 추가하기
          </Button>
        </div>

        {certificateList.map((certificate) => (
          <CertificateItemComponent
            key={certificate.id}
            certificate={certificate}
            onUpdate={updateCertificate}
            onRemove={removeCertificate}
          />
        ))}
      </div>

      <div ref={awardsRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">수상</p>
          <Button variant="outline" size="sm" onClick={addAward}>
            + 추가하기
          </Button>
        </div>

        {awardList.map((award) => (
          <AwardItemComponent
            key={award.id}
            award={award}
            onUpdate={updateAward}
            onRemove={removeAward}
          />
        ))}
      </div>

      <div ref={abroadRef} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <p className="typo-p text-foreground">해외경험</p>
          <Button variant="outline" size="sm" onClick={addAbroad}>
            + 추가하기
          </Button>
        </div>

        {abroadList.map((abroad) => (
          <AbroadItemComponent
            key={abroad.id}
            abroad={abroad}
            onUpdate={updateAbroad}
            onRemove={removeAbroad}
          />
        ))}
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
