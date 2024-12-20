import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type Props = {
  label: string;
  subLabel: string;
  description: string;
};

const DoubleGradientCard = ({ description, label, subLabel }: Props) => {
  return (
    <div className='border-in-active/50 relative flex flex-col gap-y-20 overflow-hidden rounded-xl border-[1px] p-5'>
      <div className='z-40 flex flex-col'>
        <h2 className='text-2xl font-medium text-foreground'>{label}</h2>
        <p className='text-text-secondary text-sm text-foreground'>
          {subLabel}
        </p>
      </div>
      <div className='z-40 flex items-center justify-between gap-x-10'>
        <p className='text-text-secondary text-sm text-foreground'>
          {description}
        </p>
        <Button className='h-10 w-10 rounded-full bg-primary'>
          <ArrowRight color='white' />
        </Button>
      </div>
    </div>
  );
};

export default DoubleGradientCard;
