import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EducationItem as EducationType } from './types';

interface EducationItemProps {
  edu: EducationType;
  onUpdate: (id: string, field: keyof EducationType, value: string) => void;
  onRemove: (id: string) => void;
}

export function EducationItem({ edu, onUpdate, onRemove }: EducationItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(edu.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`school-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            학교 구분
          </Label>
          <select
            value={edu.schoolType}
            onChange={(e) => onUpdate(edu.id, 'schoolType', e.target.value)}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">고등학교</option>
            <option value="대학교(2,3년)">대학교(2,3년)</option>
            <option value="대학교(4년)">대학교(4년)</option>
            <option value="대학원">대학원</option>
          </select>
        </div>
        <div>
          <Label
            htmlFor={`schoolName-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            학교명
          </Label>
          <Input
            id={`schoolName-${edu.id}`}
            value={edu.schoolName}
            onChange={(e) => onUpdate(edu.id, 'schoolName', e.target.value)}
            placeholder="학교명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`startDate-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            입학년월
          </Label>
          <Input
            id={`startDate-${edu.id}`}
            value={edu.startDate}
            onChange={(e) => onUpdate(edu.id, 'startDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`endDate-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            졸업년월
          </Label>
          <Input
            id={`endDate-${edu.id}`}
            value={edu.endDate}
            onChange={(e) => onUpdate(edu.id, 'endDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`status-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            졸업상태
          </Label>
          <select
            value={edu.status}
            onChange={(e) => onUpdate(edu.id, 'status', e.target.value)}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">졸업예정</option>
            <option value="졸업">졸업</option>
            <option value="재학">재학</option>
            <option value="중퇴">중퇴</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <Label
            htmlFor={`major-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            전공명
          </Label>
          <Input
            id={`major-${edu.id}`}
            value={edu.major}
            onChange={(e) => onUpdate(edu.id, 'major', e.target.value)}
            placeholder="전공명"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`grade-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            학점
          </Label>
          <Input
            id={`grade-${edu.id}`}
            value={edu.grade}
            onChange={(e) => onUpdate(edu.id, 'grade', e.target.value)}
            placeholder="0.00"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`maxGrade-${edu.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            총점
          </Label>
          <select
            value={edu.maxGrade}
            onChange={(e) => onUpdate(edu.id, 'maxGrade', e.target.value)}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">기준점</option>
            <option value="4.5">4.5</option>
            <option value="4.3">4.3</option>
            <option value="4.0">4.0</option>
          </select>
        </div>
        <div>
          <Label
            htmlFor={`majorType-${edu.id}`}
            className="text-sm font-medium text-foreground mb-2 block"
          >
            전공선택
          </Label>
          <select
            value={edu.majorType}
            onChange={(e) => onUpdate(edu.id, 'majorType', e.target.value)}
            className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          >
            <option value="">전공선택</option>
            <option value="주전공">주전공</option>
            <option value="복수전공">복수전공</option>
            <option value="부전공">부전공</option>
          </select>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-foreground mb-2 block">
          졸업 논문/작품
        </Label>
        <textarea
          value={edu.thesis}
          onChange={(e) => onUpdate(edu.id, 'thesis', e.target.value)}
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm min-h-[100px]"
          placeholder="Enter a description..."
        />
      </div>
    </div>
  );
}
