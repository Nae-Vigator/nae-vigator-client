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

  const handleCommonQuestionClick = () => {
    const LIST = [
      '지원하는 회사와 직무를 선택한 이유와 입사 후 어떤 목표를 가지고 있는지 말씀해 주세요.',
      '본인이 성장하면서 가장 중요하게 배운 가치관이나 태도는 무엇이며, 이를 어떻게 삶에 적용해왔나요?',
      '직무 관련 경험 중 가장 의미 있었던 사례를 구체적으로 설명해 주시고, 그 과정에서 어떤 성과를 냈는지 알려주세요.',
      '본인의 강점과 부족한 점을 솔직하게 작성하고, 팀 내 갈등이나 문제 상황을 어떻게 극복했는지 구체적으로 말해 주세요.',
      '',
    ];

    setQuestions(LIST.map((title) => ({ id: crypto.randomUUID(), title })));
  };

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

          <Button
            variant={'outline'}
            size={'lg'}
            onClick={handleCommonQuestionClick}
          >
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
