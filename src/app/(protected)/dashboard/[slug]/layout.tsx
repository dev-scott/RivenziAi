import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Sidebar from '@/components/global/sidebar';
import InfoBar from '@/components/global/infobar';
import {
  PrefetchUserAutnomations,
  PrefetchUserProfile,
} from '@/react-query/prefetch';
type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = async ({ children, params }: Props) => {
  console.log('param', params.slug);

  const query = new QueryClient();

  await PrefetchUserProfile(query);
  await PrefetchUserAutnomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
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
