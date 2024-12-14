import Loader from '@/components/global/loader';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Loader state>...Loading</Loader>
    </div>
  );
};

export default Loading;
