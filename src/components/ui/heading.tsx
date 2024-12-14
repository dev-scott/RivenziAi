import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const headingVariants = cva(
  'font-heading text-primary-foreground scroll-m-20 tracking-tight',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        gradient:
          'bg-gradient-to-r from-primary text-primary-foreground to-primary/60 bg-clip-text text-transparent',
      },
      size: {
        h1: 'text-4xl font-extrabold lg:text-5xl',
        h2: 'text-3xl font-semibold lg:text-4xl',
        h3: 'text-2xl font-semibold lg:text-3xl',
        h4: 'text-xl font-semibold lg:text-2xl',
        h5: 'text-lg font-semibold lg:text-xl',
        h6: 'text-base font-semibold lg:text-lg',
      },
      alignment: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'h1',
      alignment: 'left',
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, variant, size, alignment, as = 'h1', children, ...props },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, size, alignment, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
