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
import { useState } from 'react';

function ManageCoverletterDialog() {
  const [questions, setQuestions] = useState([
    { id: crypto.randomUUID(), title: '' },
  ]);

  const handleAddQuestionClick = () => {
    setQuestions((prev) => [...prev, { id: crypto.randomUUID(), title: '' }]);
  };

  const handleDeleteQuestionClick = (id: string) => {
    if (questions.length === 1) return;

    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, title: e.target.value } : q)),
    );
  };

  console.log(questions);

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
          <ol className="flex flex-col gap-4">
            {questions.map((question, i) => (
              <li key={question.id} className="flex gap-4 items-center">
                <span className="border border-ring rounded-md size-8 flex justify-center items-center shrink-0">
                  {i + 1}
                </span>
                <Input
                  className="h-10"
                  value={question.title}
                  placeholder="자유형식 문항이나 회사별 질문을 직접 입력해 보세요."
                  onChange={(e) => handleInputChange(e, question.id)}
                />

                <Button
                  variant={'secondary'}
                  size={'icon-lg'}
                  onClick={() => handleDeleteQuestionClick(question.id)}
                >
                  <X />
                </Button>
              </li>
            ))}
          </ol>

          <Button
            size={'icon-lg'}
            className="self-center"
            onClick={handleAddQuestionClick}
          >
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
