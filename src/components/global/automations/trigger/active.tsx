import { InstagramBlue, PlaneBlue } from '@/icons';
import React from 'react';

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className='bg-background-80 w-full rounded-xl p-3'>
      <div className='flex items-center gap-x-2'>
        {type === 'COMMENT' ? <InstagramBlue /> : <PlaneBlue />}
        <p className='text-lg'>
          {type === 'COMMENT'
            ? 'User comments on my post.'
            : 'User sends me a direct message.'}
        </p>
      </div>
      <p className='text-text-secondary'>
        {type === 'COMMENT'
          ? 'If the user comments on a video that is setup to listen for keyworks, this automation will fire'
          : 'If the user send your a message that contains a keyword, this automation will fire'}
      </p>
      <div className='ga-2 mt-5 flex flex-wrap'>
        {keywords.map((word) => (
          <div
            key={word.id}
            className='flex items-center gap-x-2 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] px-4 py-1 font-light capitalize text-white'
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
