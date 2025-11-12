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
import { ChevronRight } from 'lucide-react';
import blankcompany from '@/assets/images/blank-company.svg';

function ManageCompanyDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <ChevronRight className="size-6" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className="min-w-[936px]"
        aria-describedby="회사 정보를 입력해주세요."
      >
        <AlertDialogTitle>
          <div className="flex items-center gap-5">
            <img src={blankcompany} alt="회사이미지" />
            <strong className="text-2xl font-semibold ">회사명</strong>
          </div>
        </AlertDialogTitle>

        <CompanyInfoForm
          company="회사이름"
          job="회사직무"
          type="정규직"
          url="회사주소.com"
          description="회사 설명이 들어갑니다."
        />

        <AlertDialogFooter className="sm:justify-between mt-8">
          <Button variant={'destructive'} size={'lg'}>
            삭제하기
          </Button>

          <div className="flex gap-2.5">
            <AlertDialogCancel className="h-10">취소</AlertDialogCancel>
            <AlertDialogAction className="h-10">
              변동사항 저장하기
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ManageCompanyDialog;
