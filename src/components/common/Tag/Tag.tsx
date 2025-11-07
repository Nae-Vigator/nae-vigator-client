import { cn } from '@/lib/utils';

type TagProps = {
  label: string;
  size?: 'sm' | 'md';
} & React.ComponentProps<'div'>;

function Tag({ label, size = 'md', ...props }: TagProps) {
  return (
    <div
      className={cn(
        'border rounded-md px-2 py-1 text-sm h-7 flex items-center',
        size === 'sm' && 'h-6',
      )}
      {...props}
    >
      {label}
    </div>
  );
}

export default Tag;
