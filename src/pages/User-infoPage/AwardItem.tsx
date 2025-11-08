import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AwardItem as AwardType } from './types';

interface AwardItemProps {
  award: AwardType;
  onUpdate: (id: string, field: keyof AwardType, value: string) => void;
  onRemove: (id: string) => void;
}

export function AwardItem({ award, onUpdate, onRemove }: AwardItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(award.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`awardName-${award.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            수상명
          </Label>
          <Input
            id={`awardName-${award.id}`}
            value={award.awardName}
            onChange={(e) => onUpdate(award.id, 'awardName', e.target.value)}
            placeholder="수상명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`institution-${award.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            수여기관
          </Label>
          <Input
            id={`institution-${award.id}`}
            value={award.institution}
            onChange={(e) => onUpdate(award.id, 'institution', e.target.value)}
            placeholder="수여기관"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`awardYear-${award.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            수상연도
          </Label>
          <Input
            id={`awardYear-${award.id}`}
            value={award.awardYear}
            onChange={(e) => onUpdate(award.id, 'awardYear', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`content-${award.id}`}
          isRequired
          className="text-sm font-medium text-foreground mb-2 block"
        >
          수여내용
        </Label>
        <textarea
          id={`content-${award.id}`}
          value={award.content}
          onChange={(e) => onUpdate(award.id, 'content', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="수여 내용 및 결과물을 자세히 입력해주세요."
        />
      </div>
    </div>
  );
}
