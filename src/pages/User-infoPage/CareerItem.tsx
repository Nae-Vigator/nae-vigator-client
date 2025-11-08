import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { CareerItem as CareerType } from './types';

interface CareerItemProps {
  career: CareerType;
  onUpdate: (id: string, field: keyof CareerType, value: string | boolean) => void;
  onRemove: (id: string) => void;
}

export function CareerItem({ career, onUpdate, onRemove }: CareerItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(career.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`companyName-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            회사명
          </Label>
          <Input
            id={`companyName-${career.id}`}
            value={career.companyName}
            onChange={(e) => onUpdate(career.id, 'companyName', e.target.value)}
            placeholder="회사명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`department-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            부서명
          </Label>
          <Input
            id={`department-${career.id}`}
            value={career.department}
            onChange={(e) => onUpdate(career.id, 'department', e.target.value)}
            placeholder="부서명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`startDate-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            입사년월
          </Label>
          <Input
            id={`startDate-${career.id}`}
            value={career.startDate}
            onChange={(e) => onUpdate(career.id, 'startDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`endDate-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            퇴사년월
          </Label>
          <Input
            id={`endDate-${career.id}`}
            value={career.endDate}
            onChange={(e) => onUpdate(career.id, 'endDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
            disabled={career.isCurrentlyWorking}
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-foreground mb-2 block">
            재직중
          </Label>
          <div className="flex items-center h-11">
            <input
              type="checkbox"
              id={`isCurrentlyWorking-${career.id}`}
              checked={career.isCurrentlyWorking}
              onChange={(e) => onUpdate(career.id, 'isCurrentlyWorking', e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <label
              htmlFor={`isCurrentlyWorking-${career.id}`}
              className="ml-2 text-sm text-foreground"
            >
              재직중
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`position-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            직급/직책
          </Label>
          <select
            value={career.position}
            onChange={(e) => onUpdate(career.id, 'position', e.target.value)}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">직급/직책 선택</option>
            <option value="사원">사원</option>
            <option value="대리">대리</option>
            <option value="과장">과장</option>
            <option value="차장">차장</option>
            <option value="부장">부장</option>
            <option value="임원">임원</option>
          </select>
        </div>
        <div>
          <Label
            htmlFor={`role-${career.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            담당직무
          </Label>
          <Input
            id={`role-${career.id}`}
            value={career.role}
            onChange={(e) => onUpdate(career.id, 'role', e.target.value)}
            placeholder="담당직무"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`salary-${career.id}`}
            className="text-sm font-medium text-foreground mb-2 block"
          >
            연봉
          </Label>
          <Input
            id={`salary-${career.id}`}
            value={career.salary}
            onChange={(e) => onUpdate(career.id, 'salary', e.target.value)}
            placeholder="0,000만원"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor={`responsibilities-${career.id}`}
          isRequired
          className="text-sm font-medium text-foreground mb-2 block"
        >
          담당업무
        </Label>
        <textarea
          id={`responsibilities-${career.id}`}
          value={career.responsibilities}
          onChange={(e) => onUpdate(career.id, 'responsibilities', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="담당하신 업무에 대해 간단히 설명해 주세요."
        />
      </div>
    </div>
  );
}
