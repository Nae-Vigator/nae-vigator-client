import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import CompanyInfoForm from '../CompanyInfoForm/CompanyInfoForm';

type AddCompanyDialogProps = {
  TriggerButton: React.ReactNode;
};

function AddCompanyDialog({ TriggerButton }: AddCompanyDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{TriggerButton}</AlertDialogTrigger>
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
              관련 공고 URL 및 간단한 회사 설명을 함께 작성해주시면 정확도가 더
              올라가요.
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
  );
}

export default AddCompanyDialog;
