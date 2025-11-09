import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';

function ManageCoverletterDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="lg" className="h-11" onClick={() => {}}>
          질문관리
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="min-w-[936px]">
        <AlertDialogHeader className="flex flex-row justify-between items-center">
          <div>
            <AlertDialogTitle className="text-2xl mb-1.5">
              맞춤형 자기소개서 질문 관리하기
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground">
              자유롭게 문항을 입력해 개별 지원서 작성에 활용해 보세요.
            </AlertDialogDescription>
          </div>

          <Button variant={'outline'} size={'lg'}>
            자주 묻는 기본 자기소개서 질문 불러오기
          </Button>
        </AlertDialogHeader>

        <div className="flex flex-col gap-4 mb-10">
          <ol>
            <li className="flex gap-4 items-center">
              <span className="border border-ring rounded-md size-8 flex justify-center items-center shrink-0">
                1
              </span>
              <Input
                className="h-10"
                // value="지원하는 회사와 직무를 선택한 이유와 입사 후 어떤 목표를 가지고 있는지 말씀해 주세요."
                placeholder="자유형식 문항이나 회사별 질문을 직접 입력해 보세요."
              />

              <Button variant={'secondary'} size={'icon-lg'}>
                <X />
              </Button>
            </li>
          </ol>

          <Button size={'icon-lg'} className="self-center">
            <Plus />
          </Button>
        </div>

        <AlertDialogFooter className="flex sm:justify-between">
          <AlertDialogCancel>취소</AlertDialogCancel>
          <div>
            <Button variant={'outline'} className="mr-2.5">
              저장
            </Button>
            <AlertDialogAction>AI로 자기소개서 초안 생성하기</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ManageCoverletterDialog;
