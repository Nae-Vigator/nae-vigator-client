import { useState } from 'react';
import LogoIcon from '@/components/common/LogoIcon';
import LogoTitle from '@/components/common/LogoTitle';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SignupPageProps {
  userName?: string;
}

function SignupPage({ userName = '예시' }: SignupPageProps) {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [detailedJob, setDetailedJob] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const jobs = [
    { value: '개발', label: '개발' },
    { value: '디자인', label: '디자인' },
    { value: '기획', label: '기획' },
  ];

  const isFormValid = selectedJob.trim() !== '' && detailedJob.trim() !== '';

  const handleAddCustomJob = () => {
    if (searchValue.trim()) {
      setSelectedJob(searchValue.trim());
      setOpen(false);
      setSearchValue('');
    }
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log('User Name:', userName);
    console.log('Selected Job:', selectedJob);
    console.log('Detailed Job:', detailedJob);
  };

  return (
    <div className="min-h-screen w-full bg-[#1D1B2B] flex justify-center items-center p-4">
      <div className="w-full max-w-[1800px] flex items-center justify-between gap-16 px-[5%]">
        <div className="flex items-center gap-6 shrink-0">
          <LogoIcon className="w-[130px]" />
          <LogoTitle className="w-[320px]" />
        </div>

        <div className="bg-white py-16 px-18 flex-1 max-w-[950px] shadow-xl rounded-xl flex items-start">
          <div className="w-full">
            <div className="w-full mb-16">
              <h1 className="text-2xl font-bold tracking-tight text-black mb-2">
                환영해요 {userName}님!
              </h1>
              <p className="text-sm font-normal text-muted-foreground">
                취업 준비중인 직군을 선택해주세요.
              </p>
            </div>

            <div className="mb-12">
              <Label
                htmlFor="job-select"
                isRequired
                className="text-sm font-bold text-black mb-3"
              >
                직군 선택
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-sm font-normal"
                  >
                    {selectedJob
                      ? jobs.find((job) => job.value === selectedJob)?.label ||
                        selectedJob
                      : '직군을 선택해주세요.'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command shouldFilter={false}>
                    <CommandInput
                      placeholder="추가 직군 검색하기"
                      value={searchValue}
                      onValueChange={setSearchValue}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchValue.trim()) {
                          e.preventDefault();
                          handleAddCustomJob();
                        }
                      }}
                    />
                    <CommandList>
                      <CommandEmpty />

                      <CommandGroup>
                        {jobs
                          .filter((job) =>
                            job.label
                              .toLowerCase()
                              .includes(searchValue.toLowerCase()),
                          )
                          .map((job) => (
                            <CommandItem
                              key={job.value}
                              value={job.value}
                              onSelect={(currentValue) => {
                                setSelectedJob(
                                  currentValue === selectedJob
                                    ? ''
                                    : currentValue,
                                );
                                setOpen(false);
                                setSearchValue('');
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  selectedJob === job.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {job.label}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="mb-32">
              <Label
                htmlFor="detailed-job"
                isRequired
                className="text-sm font-bold text-black mb-3"
              >
                상세 직무
              </Label>
              <Input
                id="detailed-job"
                type="text"
                value={detailedJob}
                onChange={(e) => setDetailedJob(e.target.value)}
                placeholder="상세 직무를 입력해주세요."
                className="text-sm font-normal"
              />
            </div>

            <div className="flex justify-center mt-8">
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed"
              >
                선택 완료
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
