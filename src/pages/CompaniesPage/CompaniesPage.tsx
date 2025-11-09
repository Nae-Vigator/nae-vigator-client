import CompanyInfoForm from '@/components/common/CompanyInfoForm/CompanyInfoForm';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Link } from 'react-router';

const DATA = [
  { id: 1, name: '토스', job: 'UX 디자이너' },
  { id: 2, name: '카카오뱅크', job: '프로덕트 디자이너' },
  { id: 3, name: '네이버', job: '프로덕트 디자이너' },
  { id: 4, name: '당근마켓', job: 'UX 디자이너' },
  { id: 5, name: '라인', job: '프로덕트 디자이너' },
  { id: 6, name: '쿠팡', job: '프로덕트 디자이너' },
];

// const DATA = [];

function CompaniesPage() {
  const hasData = DATA.length > 0;

  return (
    <div>
      <h3
        className={cn(
          'typo-h3 text-zinc-700',
          hasData ? 'mb-10' : 'mb-[100px]',
        )}
      >
        회사별 맞춤 관리
      </h3>
      <div
        className={cn(
          hasData ? 'flex justify-between items-center mb-10' : 'text-center',
        )}
      >
        <h4 className={cn('typo-h4 text-zinc-700', !hasData && 'mb-10')}>
          회사와 관련 공고 등록하고 맞춤 자기소개서를 생성해보세요.
        </h4>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="h-11">
              <Plus />
              회사 추가
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent
            className="min-w-[936px]"
            aria-describedby="회사 정보를 입력해주세요."
          >
            <AlertDialogTitle>
              <div className="flex flex-col gap-1.5">
                <strong className="text-2xl font-semibold ">
                  지원하고자 하는 회사의 정보를 입력해주세요.
                </strong>
                <span className="text-sm text-muted-foreground font-normal">
                  관련 공고 URL 및 간단한 회사 설명을 함께 작성해주시면 정확도가
                  더 올라가요.
                </span>
              </div>
            </AlertDialogTitle>

            <CompanyInfoForm />

            <AlertDialogFooter className="sm:justify-between mt-[26px]">
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>확인</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {hasData && (
        <section className="flex gap-10 flex-wrap">
          {DATA.map(({ id, job, name }) => (
            <Link
              to={`/companies/${name}/experience`}
              key={id}
              className="group relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="126"
                viewBox="0 0 200 126"
                fill="none"
              >
                <mask id="path-1-inside-1_235_9669" fill="white">
                  <path d="M98 7.5C98 11.6421 101.358 15 105.5 15H182C191.941 15 200 23.0589 200 33V108C200 117.941 191.941 126 182 126H18C8.05887 126 0 117.941 0 108V18C0 8.05887 8.05888 0 18 0H90.5C94.6421 0 98 3.35786 98 7.5Z" />
                </mask>
                <path
                  d="M98 7.5C98 11.6421 101.358 15 105.5 15H182C191.941 15 200 23.0589 200 33V108C200 117.941 191.941 126 182 126H18C8.05887 126 0 117.941 0 108V18C0 8.05887 8.05888 0 18 0H90.5C94.6421 0 98 3.35786 98 7.5Z"
                  className="fill-background transition-[fill] group-hover:fill-input group-focus:fill-input"
                />
                <path
                  d="M105.5 15V17H182V15V13H105.5V15ZM200 33H198V108H200H202V33H200ZM182 126V124H18V126V128H182V126ZM0 108H2V18H0H-2V108H0ZM18 0V2H90.5V0V-2H18V0ZM90.5 0V2C93.5376 2 96 4.46243 96 7.5H98H100C100 2.25329 95.7467 -2 90.5 -2V0ZM0 18H2C2 9.16344 9.16344 2 18 2V0V-2C6.95431 -2 -2 6.9543 -2 18H0ZM18 126V124C9.16344 124 2 116.837 2 108H0H-2C-2 119.046 6.9543 128 18 128V126ZM200 108H198C198 116.837 190.837 124 182 124V126V128C193.046 128 202 119.046 202 108H200ZM182 15V17C190.837 17 198 24.1634 198 33H200H202C202 21.9543 193.046 13 182 13V15ZM105.5 15V13C102.462 13 100 10.5376 100 7.5H98H96C96 12.7467 100.253 17 105.5 17V15Z"
                  className="fill-border transition-[fill] group-hover:fill-ring group-focus:fill-ring"
                  mask="url(#path-1-inside-1_235_9669)"
                />
              </svg>
              <div className="absolute left-4 bottom-[27px] flex flex-col gap-1">
                <span className="font-semibold">{name}</span>
                <span className="text-sm">{job}</span>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

export default CompaniesPage;
