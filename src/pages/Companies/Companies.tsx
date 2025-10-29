import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

function Companies() {
  return (
    <div>
      <h3 className="typo-h3 text-zinc-700 mb-[100px]">회사별 맞춤 관리</h3>
      <div className="text-center">
        <h4 className="typo-h4 text-zinc-700 mb-10">
          회사와 관련 공고 등록하고 맞춤 자기소개서를 생성해보세요.
        </h4>
        <Button className="h-11">
          <Plus />
          회사 추가
        </Button>
      </div>
    </div>
  );
}

export default Companies;
