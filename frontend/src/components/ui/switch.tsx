import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

export type SwitchSize = 'sm' | 'md' | 'lg';

const sizeStyles = {
  sm: {
    track: 'h-4 w-8',
    thumb: 'h-3 w-3 ring-[0.75px] data-[state=checked]:translate-x-4',
  },
  md: {
    track: 'h-6 w-11',
    thumb: 'h-5 w-5 ring-1 data-[state=checked]:translate-x-5',
  },
  lg: {
    track: 'h-8 w-14',
    thumb: 'h-6 w-6 ring-[1.25px] data-[state=checked]:translate-x-7',
  },
};

interface AdaptableSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: SwitchSize;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  AdaptableSwitchProps
>(({ className, size = 'md', ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className,
      sizeStyles[size].track
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block rounded-full bg-background shadow-lg ring-border transition-transform data-[state=unchecked]:translate-x-0',
        sizeStyles[size].thumb
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
