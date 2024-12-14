import { cn } from '@/lib/utils';
import React from 'react';

type MaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        'mx-auto h-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
