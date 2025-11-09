import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';
import { EllipsisVertical } from 'lucide-react';

function CoverLetterPage() {
  const LIST = [
    {
      question:
        '지원하는 회사와 직무를 선택한 이유와 입사 후 어떤 목표를 가지고 있는지 말씀해 주세요.',
      answer: 'ai에 의해 생성된 초안\n- 1. ....\n- 2. .....\n- 3. .....',
    },
    {
      question:
        '본인이 성장하면서 가장 중요하게 배운 가치관이나 태도는 무엇이며, 이를 어떻게 삶에 적용해왔나요?',
      answer: '질문에 대한 자기소개 내용 초안 생성',
    },
    {
      question:
        '직무 관련 경험 중 가장 의미 있었던 사례를 구체적으로 설명해 주시고, 그 과정에서 어떤 성과를 냈는지 알려주세요.',
      answer: '질문에 대한 자기소개 내용 초안 생성',
    },
  ];

  return (
    <section>
      <ol className="flex flex-col gap-7">
        {LIST.map((v, i) => (
          <li
            key={v.question}
            className="relative border rounded-md shadow-md p-4 pr-14"
          >
            <div className="flex justify-between text-lg mb-3">
              <b>
                {i + 1}. {v.question}
              </b>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical className="absolute top-4 right-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>카드 수정</DropdownMenuItem>
                  <DropdownMenuItem>카드 삭제</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div>
              <span className="inline-block text-sm mb-1.5">내용</span>
              <Textarea defaultValue={v.answer} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default CoverLetterPage;
