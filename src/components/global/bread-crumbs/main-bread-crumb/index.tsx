import { PAGE_ICON } from '@/constants/pages';
import React from 'react';

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className='mt-12 flex flex-col items-start'>
      {page === 'Home' && (
        <div>
          <p className='text-2xl font-semibold'>Welcome back</p>
          <span className='text-base'>{slug}</span>
        </div>
      )}
      <div className='mt-6 flex gap-x-2'>
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className='text-3xl font-semibold'>{page}</h2>
      </div>
    </div>
  );
};

export default MainBreadCrumb;
