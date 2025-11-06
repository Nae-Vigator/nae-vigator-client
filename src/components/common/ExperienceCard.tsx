import { CalendarDays, EllipsisVertical, Tags } from 'lucide-react';
import { Badge } from '../ui/badge';
import Tag from './Tag/Tag';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type ExperienceCardProps = {
  date: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
};

function ExperienceCard({
  date,
  type,
  title,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <article className="flex flex-col border p-4 rounded-md shadow gap-2 w-[calc((100%/3)-19px)] overflow-hidden">
      <div className="flex justify-between ">
        <div className="flex items-start text-muted-foreground gap-2">
          <CalendarDays className="size-4" />
          <time className="text-xs">{date}</time>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>카드 수정</DropdownMenuItem>
            <DropdownMenuItem>카드 삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="truncate">
        <Badge variant={'outline'} className="text-sm px-3 py-1 h-7 mr-3">
          {type}
        </Badge>
        <strong className="text-lg">{title}</strong>
      </div>

      <p className="text-sm truncate">{description}</p>

      <div className="flex gap-3 items-center whitespace-nowrap">
        <Tags className="size-5 shrink-0" />
        <div className="flex gap-2">
          {tags.map((label) => (
            <Tag key={label} label={label} size="sm" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
