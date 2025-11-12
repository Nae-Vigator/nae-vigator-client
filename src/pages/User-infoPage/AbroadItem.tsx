import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AbroadItem as AbroadType } from './types';

interface AbroadItemProps {
  abroad: AbroadType;
  onUpdate: (id: string, field: keyof AbroadType, value: string) => void;
  onRemove: (id: string) => void;
}

export function AbroadItem({ abroad, onUpdate, onRemove }: AbroadItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(abroad.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`country-${abroad.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            국가명
          </Label>
          <Input
            id={`country-${abroad.id}`}
            value={abroad.country}
            onChange={(e) => onUpdate(abroad.id, 'country', e.target.value)}
            placeholder="국가명을 입력해주세요"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`startDate-${abroad.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            시작년월
          </Label>
          <Input
            id={`startDate-${abroad.id}`}
            value={abroad.startDate}
            onChange={(e) => onUpdate(abroad.id, 'startDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`endDate-${abroad.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            종료년월
          </Label>
          <Input
            id={`endDate-${abroad.id}`}
            value={abroad.endDate}
            onChange={(e) => onUpdate(abroad.id, 'endDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`content-${abroad.id}`}
          isRequired
          className="text-sm font-medium text-foreground mb-2 block"
        >
          내용
        </Label>
        <textarea
          id={`content-${abroad.id}`}
          value={abroad.content}
          onChange={(e) => onUpdate(abroad.id, 'content', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="해외에서 어떤 경험을 했는지 작성해 주세요. (ex. 어학연수, 교환학생, 워킹홀리데이, 해외근무 등)"
        />
      </div>
    </div>
  );
}
