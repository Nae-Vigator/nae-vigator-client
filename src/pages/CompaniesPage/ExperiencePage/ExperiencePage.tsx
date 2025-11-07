import ExperienceCard from '@/components/common/ExperienceCard/ExperienceCard';
import type { ExperienceSidebarContextType } from '@/components/layout/CompaniesLayout/CompaniesLayout';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, X } from 'lucide-react';
import { useOutletContext } from 'react-router';

function ExperiencePage() {
  const [isExperienceSidebarOpen, setIsExperienceSidebarOpen] =
    useOutletContext<ExperienceSidebarContextType>();

  return (
    <section>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex text-sm items-center gap-2 justify-self-end my-7 py-2 px-4">
          경험 전체 보기 <ChevronDown className="size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>경력</DropdownMenuItem>
          <DropdownMenuItem>대외활동</DropdownMenuItem>
          <DropdownMenuItem>교육</DropdownMenuItem>
          <DropdownMenuItem>수상</DropdownMenuItem>
          <DropdownMenuItem>해외경험</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-wrap gap-7">
        <ExperienceCard
          date="2024.04 ~ 2024.12"
          type="경력"
          title="위커머스-UX 디자이너"
          description="그룹 구매 플랫폼 리디자인 프로젝트"
          tags={['UX리서치', '사용성테스트', '데이터기반개선', '프로토타이핑 ']}
        />
        <ExperienceCard
          date="2024.03 ~ 2024.08"
          type="대외활동"
          title="LG디자인연구소"
          description="디자인씽킹 챌린지- 사용자 문제 정의 및 프로토타입 제작을 주도하여 최우수 팀으로 선정됨"
          tags={['팀워크', '문제해결', '데이터분석', '프로토타이핑 ']}
        />
        <ExperienceCard
          date="2023.06 ~ 2023.11"
          type="경력"
          title="핀플로우-프로덕트 디자이너"
          description="핀테크 온보딩 리디자인"
          tags={['핀테크UX', '데이터분석', '퍼널개선']}
        />
        <ExperienceCard
          date="2023.02 ~ 2023.05"
          type="교육"
          title="UX 아카데미-UX 데이터 리서치 실무"
          description="사용자 데이터 기반 문제 도출 및 솔루션 실습"
          tags={[
            'UX리서치',
            '데이터리터러시',
            '데이터기반개선',
            '프로토타이핑',
          ]}
        />
        <ExperienceCard
          date="2024.09"
          type="수상"
          title="한국디자인진흥원-우수상"
          description="비대면 금융 UX 개선 아이디어 제출"
          tags={['디자인공모전', '성과', '디지털금융UX']}
        />
      </div>

      {isExperienceSidebarOpen && (
        <aside className="absolute top-5 right-0 border shadow-lg p-6 w-96 h-[calc(100dvh-40px)] bg-white mx-5 overflow-y-auto overscroll-contain">
          <div className="flex flex-col">
            <button
              className="self-end"
              onClick={() => setIsExperienceSidebarOpen((prev) => !prev)}
            >
              <X className="size-4" />
            </button>
            <b className="text-lg">경험 카드 추가하기</b>
            <p className="text-sm text-muted-foreground my-2">
              이전에 생성한 경험을 추가할수도, 새로운 경험을 생성할 수도 있어요.
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex text-sm justify-self-end items-center gap-2  mb-4 py-2 px-4">
              경험 전체 보기 <ChevronDown className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>경력</DropdownMenuItem>
              <DropdownMenuItem>대외활동</DropdownMenuItem>
              <DropdownMenuItem>교육</DropdownMenuItem>
              <DropdownMenuItem>수상</DropdownMenuItem>
              <DropdownMenuItem>해외경험</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-col gap-7 mb-2">
            <ExperienceCard
              date="2024.04 ~ 2024.12"
              type="경력"
              title="위커머스-UX 디자이너"
              description="그룹 구매 플랫폼 리디자인 프로젝트"
              tags={[
                'UX리서치',
                '사용성테스트',
                '데이터기반개선',
                '프로토타이핑',
              ]}
              mode="add"
              isAdded
            />
            <ExperienceCard
              date="2024.03 ~ 2024.08"
              type="대외활동"
              title="LG디자인연구소"
              description="디자인씽킹 챌린지- 사용자 문제 정의 및 프로토타입 제작을 주도하여 최우수 팀으로 선정됨"
              tags={['팀워크', '문제해결', '데이터분석', '프로토타이핑 ']}
              mode="add"
            />
            <ExperienceCard
              date="2023.06 ~ 2023.11"
              type="경력"
              title="핀플로우-프로덕트 디자이너"
              description="핀테크 온보딩 리디자인"
              tags={['핀테크UX', '데이터분석', '퍼널개선']}
              mode="add"
            />
            <ExperienceCard
              date="2023.02 ~ 2023.05"
              type="교육"
              title="UX 아카데미-UX 데이터 리서치 실무"
              description="사용자 데이터 기반 문제 도출 및 솔루션 실습"
              tags={[
                'UX리서치',
                '데이터리터러시',
                '데이터기반개선',
                '프로토타이핑',
              ]}
              mode="add"
            />
            <ExperienceCard
              date="2024.09"
              type="수상"
              title="한국디자인진흥원-우수상"
              description="비대면 금융 UX 개선 아이디어 제출"
              tags={['디자인공모전', '성과', '디지털금융UX']}
              mode="add"
            />
            <ExperienceCard
              date="2024.09"
              type="수상"
              title="한국디자인진흥원-우수상"
              description="비대면 금융 UX 개선 아이디어 제출"
              tags={['디자인공모전', '성과', '디지털금융UX']}
              mode="add"
            />
            <ExperienceCard
              date="2024.09"
              type="수상"
              title="한국디자인진흥원-우수상"
              description="비대면 금융 UX 개선 아이디어 제출"
              tags={['디자인공모전', '성과', '디지털금융UX']}
              mode="add"
            />
          </div>

          <Button className="sticky bottom-0 flex justify-self-end">
            새로운 경험 추가
          </Button>
        </aside>
      )}
    </section>
  );
}

export default ExperiencePage;
