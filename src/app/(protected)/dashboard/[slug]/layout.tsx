import React from 'react';
import { HydrationBoundary } from '@tanstack/react-query';
import Sidebar from '@/components/global/sidebar';
import InfoBar from '@/components/global/infobar';
type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = ({ children, params }: Props) => {
  console.log('param', params.slug);
  return (
    <HydrationBoundary>
      <div className='p-3'>
        {/* there is the side bar */}
        <Sidebar slug={params.slug} />
        <div className='flex flex-col overflow-auto lg:ml-[250px] lg:pl-10'>
          {/* info bar */}

          <InfoBar slug={params.slug} />

          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default layout;
