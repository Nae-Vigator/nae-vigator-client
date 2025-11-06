import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight, Plus, Tags } from 'lucide-react';
import { Link, Outlet, useLocation, useParams } from 'react-router';
import blankcompany from '@/assets/images/blank-company.svg';
import Tag from '@/components/common/Tag/Tag';
import { useState } from 'react';

const PATH_LIST = [
  { path: 'experience', label: '경험정리' },
  { path: 'coverletter', label: '자기소개서' },
  { path: 'interview', label: '예상 면접 질문' },
];

const PAGE_TITLE_MAP: Record<string, string> = {
  experience: '경험정리',
  coverletter: '자기소개서',
  interview: '예상 면접 질문',
};

function CompaniesLayout() {
  //TODO: 전역 상태로 관리하기
  const [isExperienceSidebarOpen, setIsExperienceSidebarOpen] = useState(true);
  const location = useLocation();
  const params = useParams();
  const lastPath = location.pathname.split('/').pop() ?? '';
  const PAGE_TITLE = PAGE_TITLE_MAP[lastPath];

  return (
    <div className={cn(isExperienceSidebarOpen && 'pr-[424px]')}>
      <header>
        <div className="flex items-center gap-3.5 mb-10">
          <Link to="/companies">
            <h3 className="typo-h3 text-zinc-700">회사별 맞춤 관리</h3>
          </Link>
          <div className="flex items-center gap-2 text-sm ">
            <span className="text-muted-foreground">{params.company}</span>
            <ChevronRight className="size-3.5 text-muted-foreground" />
            <span>{PAGE_TITLE}</span>
          </div>
        </div>

        <div className="flex justify-between gap-8 typo-h4 mb-7">
          <div className="flex items-center gap-8 shrink-0">
            {PATH_LIST.map(({ path, label }) => (
              <Link
                to={`/companies/${params.company}/${path}`}
                key={label}
                className={cn(
                  'flex items-center gap-2',
                  path === lastPath ? 'text-primary' : 'text-zinc-300',
                )}
              >
                {label}
                <div
                  className={cn(
                    'size-8  text-center text-sm text-white flex justify-center items-center rounded-md',
                    path === lastPath ? 'bg-primary ' : 'bg-zinc-300',
                  )}
                >
                  7
                </div>
              </Link>
            ))}
          </div>

          <Button
            size="lg"
            className="h-11"
            onClick={() => setIsExperienceSidebarOpen((prev) => !prev)}
          >
            <Plus /> 카드 추가
          </Button>
        </div>

        <div className="flex items-center gap-5 mb-7">
          <Tags />
          <div className="flex gap-2">
            <Tag label="Tag" />
            <Tag label="사용자중심" />
            <Tag label="데이터기반사고" />
            <Tag label="협업" />
            <Tag label="문제해결력" />
            <Tag label="디지털금융혁신" />
          </div>
        </div>

        <div className="flex justify-between items-center border rounded-xl p-3 mb-7">
          <div className="flex items-center gap-5">
            <img src={blankcompany} alt="회사이미지" />
            <strong className="text-2xl font-semibold">{params.company}</strong>
            <span className="text-sm">지원 직무: 프로덕트 디자이너</span>
          </div>

          <ChevronRight />
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default CompaniesLayout;
