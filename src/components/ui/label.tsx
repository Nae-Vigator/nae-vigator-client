import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

/**
 * @prop isRequired - `true` 설정 시, `*` 마크가 라벨 텍스트 뒤에 추가됩니다.
 */
function Label({
  isRequired = false,
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
  isRequired?: boolean;
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        isRequired && "after:content-['*'] after:text-destructive after:ml-0.5",
        'mb-1',
        className,
      )}
      {...props}
    />
  );
}

export { Label };
