import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { TrainingItem as TrainingType } from './types';

interface TrainingItemProps {
  training: TrainingType;
  onUpdate: (id: string, field: keyof TrainingType, value: string) => void;
  onRemove: (id: string) => void;
}

export function TrainingItem({
  training,
  onUpdate,
  onRemove,
}: TrainingItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(training.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`courseName-${training.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            교육명
          </Label>
          <Input
            id={`courseName-${training.id}`}
            value={training.courseName}
            onChange={(e) =>
              onUpdate(training.id, 'courseName', e.target.value)
            }
            placeholder="교육명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`institution-${training.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            교육기관
          </Label>
          <Input
            id={`institution-${training.id}`}
            value={training.institution}
            onChange={(e) =>
              onUpdate(training.id, 'institution', e.target.value)
            }
            placeholder="교육기관"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`startDate-${training.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            시작년월
          </Label>
          <Input
            id={`startDate-${training.id}`}
            value={training.startDate}
            onChange={(e) => onUpdate(training.id, 'startDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`endDate-${training.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            종료년월
          </Label>
          <Input
            id={`endDate-${training.id}`}
            value={training.endDate}
            onChange={(e) => onUpdate(training.id, 'endDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`content-${training.id}`}
          className="text-sm font-medium text-foreground mb-2 block"
        >
          내용
        </Label>
        <textarea
          id={`content-${training.id}`}
          value={training.content}
          onChange={(e) => onUpdate(training.id, 'content', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="이수하신 교육과정에 대해 직성해주세요."
        />
      </div>
    </div>
  );
}
