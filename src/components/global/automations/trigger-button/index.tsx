import React from 'react';
import PopOver from '../../popover';
import { Divide } from 'lucide-react';
import { BlueAddIcon } from '@/icons';

type Props = {
  children: React.ReactNode;
  label: string;
};

const TriggerButton = ({ children, label }: Props) => {
  return (
    <PopOver
      className='w-[400px]'
      trigger={
        <div className='mt-4 flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl border-2 border-dashed border-[#3352cc] p-5 transition duration-100 hover:opacity-80'>
          <BlueAddIcon />
          <p className='font-bold text-[#768BDD]'>{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};

export default TriggerButton;
