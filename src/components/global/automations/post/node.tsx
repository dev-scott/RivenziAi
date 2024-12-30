'use client';
import { Separator } from '@/components/ui/separator';
import { useQueryAutomation } from '@/hooks/user-queries';
import { InstagramBlue, Warning } from '@/icons';
import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
};

const PostNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);

  return (
    data?.data &&
    data.data.posts.length > 0 && (
      <div className='relative flex w-10/12 flex-col gap-y-3 rounded-xl border-[1px] border-slate-900 border-opacity-20 bg-white p-5 lg:w-8/12 xl:w-4/12'>
        <div className='absolute bottom-full left-1/2 z-50 flex h-20 flex-col items-center'>
          <span className='bg-connector/10 h-[9px] w-[9px] rounded-full' />
          <Separator
            orientation='vertical'
            className='border-connector/10 bottom-full flex-1 border-[1px]'
          />
          <span className='bg-connector/10 h-[9px] w-[9px] rounded-full' />
        </div>
        <div className='flex gap-x-2'>
          <Warning />
          If they comment on...
        </div>
        <div className='bg-background-80 flex flex-col gap-y-2 rounded-xl p-3'>
          <div className='flex items-center gap-x-2'>
            <InstagramBlue />
            <p className='text-lg font-bold'>These posts</p>
          </div>
          <div className='mt-3 flex flex-wrap gap-x-2'>
            {data.data.posts.map((post) => (
              <div
                key={post.id}
                className='relative aspect-square w-4/12 cursor-pointer overflow-hidden rounded-lg'
              >
                <Image fill sizes='100vw' src={post.media} alt='post image' />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default PostNode;
