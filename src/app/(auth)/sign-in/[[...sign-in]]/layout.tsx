import MaxWidthWrapper from '@/app/(landing)/_components/max-width-wrapper';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <MaxWidthWrapper>
      <div className='flex h-screen items-center justify-center'>
        {children}
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
