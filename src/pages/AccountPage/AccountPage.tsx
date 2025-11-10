import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import naver from '@/assets/images/naver-logo.svg';
import kakao from '@/assets/images/kakao-logo.svg';
import { useState } from 'react';

function AccountPage() {
  const [input, setInput] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h3 className="typo-h3 mb-10">계정 관리</h3>

      <div className="mb-7">
        <h4 className="typo-h4 mb-3">소셜 로그인 연동 관리</h4>
        <div className="flex items-center gap-7">
          <div className="flex justify-center items-center size-[50px] bg-[#fee500] rounded-full">
            <img src={kakao} alt="카카오" />
          </div>
          <div className="flex gap-5 text-sm">
            <span>가입일</span>
            <span>2025/11/10</span>
          </div>
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="typo-h4">탈퇴하기</button>
        </AlertDialogTrigger>
        <AlertDialogContent className="min-w-[820px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl">
              정말 탈퇴하시겠어요?
            </AlertDialogTitle>
            <AlertDialogDescription>
              탈퇴 선택시, 계정은 삭제 되며 복구되지 않습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mb-2">
            <p className="text-sm mb-1.5">
              실수를 방지하기 위해 아래 문구를 정확히 입력해주세요.
            </p>
            <Input
              placeholder="탈퇴를 진행합니다"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogCancel>취소</AlertDialogCancel>
            <Button
              variant={'destructive'}
              disabled={input !== '탈퇴를 진행합니다'}
            >
              탈퇴
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AccountPage;
