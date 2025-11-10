import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

const EMPLOYMENT_TYPE = [
  {
    value: '정규직',
    label: '정규직',
  },
  {
    value: '계약직',
    label: '계약직',
  },
  {
    value: '인턴',
    label: '인턴',
  },
  {
    value: '프리랜서',
    label: '프리랜서',
  },
];

type CompanyInfoFormProps = {
  company?: string;
  job?: string;
  type?: string;
  url?: string;
  description?: string;
};

function CompanyInfoForm({
  company = '',
  job = '',
  type = '',
  url = '',
  description = '',
}: CompanyInfoFormProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({ company, job, type, url, description });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string,
  ) => {
    setValue((prev) => ({ ...prev, [type]: e.target.value }));
  };

  return (
    <div id="회사 정보를 입력해주세요." className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div>
          <Label htmlFor="company" isRequired>
            회사명
          </Label>
          <Input
            id="company"
            className="w-[323px]"
            type="text"
            placeholder="지원하려고 하는 회사명을 입력해주세요."
            value={value.company}
            onChange={(e) => handleInputChange(e, 'company')}
            required
          />
        </div>

        <div className="w-full">
          <Label htmlFor="job" isRequired>
            직무 선택
          </Label>
          <Input
            id="job"
            type="text"
            placeholder="지원하려는 직무를 선택해주세요."
            value={value.job}
            onChange={(e) => handleInputChange(e, 'job')}
            required
          />
        </div>

        <div className="w-full">
          <Label htmlFor="type">채용 형태</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="type"
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  'flex justify-between w-full',
                  !value.type && 'text-muted-foreground',
                )}
              >
                {value.type || '채용 형태를 선택해주세요.'}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {EMPLOYMENT_TYPE.map((type) => (
                      <CommandItem
                        key={type.value}
                        value={type.value}
                        onSelect={(currentValue) => {
                          setValue((prev) => ({ ...prev, type: currentValue }));
                          setOpen(false);
                        }}
                      >
                        {type.label}
                        <Check
                          className={cn(
                            'ml-auto',
                            value.type === type.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div>
        <Label htmlFor="url">관련 공고 URL</Label>
        <div className="relative">
          <span className="absolute top-1/2 left-3 -translate-y-1/2  text-sm text-muted-foreground ">
            https://
          </span>
          <div className="absolute left-[68px] w-px bg-input h-9" />
          <Input
            id="url"
            className="pl-[78px]"
            type="text"
            placeholder="example.com"
            value={value.url}
            onChange={(e) => handleInputChange(e, 'url')}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">회사 설명</Label>
        <Textarea
          id="description"
          placeholder="더욱 정확한 정보를 위한 설명도 함께 작성해주세요."
          className="min-h-40"
          value={value.description}
          onChange={(e) => handleInputChange(e, 'description')}
        />
      </div>
    </div>
  );
}

export default CompanyInfoForm;
