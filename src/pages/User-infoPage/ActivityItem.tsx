import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ActivityItem as ActivityType } from './types';

interface ActivityItemProps {
  activity: ActivityType;
  onUpdate: (id: string, field: keyof ActivityType, value: string) => void;
  onRemove: (id: string) => void;
}

export function ActivityItem({
  activity,
  onUpdate,
  onRemove,
}: ActivityItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(activity.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`activityType-${activity.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            활동 구분
          </Label>
          <select
            value={activity.activityType}
            onChange={(e) =>
              onUpdate(activity.id, 'activityType', e.target.value)
            }
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">활동구분</option>
            <option value="동아리">동아리</option>
            <option value="학회">학회</option>
            <option value="봉사">봉사</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div>
          <Label
            htmlFor={`organization-${activity.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            회사/기관/단체명
          </Label>
          <Input
            id={`organization-${activity.id}`}
            value={activity.organization}
            onChange={(e) =>
              onUpdate(activity.id, 'organization', e.target.value)
            }
            placeholder="회사/기관/단체명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`startDate-${activity.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            시작년월
          </Label>
          <Input
            id={`startDate-${activity.id}`}
            value={activity.startDate}
            onChange={(e) => onUpdate(activity.id, 'startDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`endDate-${activity.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            종료년월
          </Label>
          <Input
            id={`endDate-${activity.id}`}
            value={activity.endDate}
            onChange={(e) => onUpdate(activity.id, 'endDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`employed-${activity.id}`}
          className="text-sm font-medium text-foreground mb-2 block"
        >
          경험 관련 간단 설명
        </Label>
        <Input
          id={`employed-${activity.id}`}
          value={activity.employed}
          onChange={(e) => onUpdate(activity.id, 'employed', e.target.value)}
          placeholder="이 내용은 이력서에 포함되지 않으며, 사용자가 경험을 정리하기 쉽게 메모용으로 작성하는 칸입니다."
          className="bg-white text-foreground h-11"
        />
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`task-${activity.id}`}
          isRequired
          className="text-sm font-medium text-foreground mb-2 block"
        >
          활동내용
        </Label>
        <textarea
          id={`task-${activity.id}`}
          value={activity.task}
          onChange={(e) => onUpdate(activity.id, 'task', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="직무와 관련된 경험에 대해 직성해주세요."
        />
      </div>
    </div>
  );
}
