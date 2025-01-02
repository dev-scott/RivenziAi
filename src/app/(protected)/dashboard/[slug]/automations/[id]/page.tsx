import { getAutomationInfo } from '@/actions/automations';
import PostNode from '@/components/global/automations/post/node';
import ThenNode from '@/components/global/automations/then/node';
import Trigger from '@/components/global/automations/trigger';
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations';
import { Warning } from '@/icons';
import { PrefetchUserAutomation } from '@/react-query/prefetch';
import type { NextPage } from 'next';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import React from 'react';

// type Props = {
//   params: { id: string };
// };
type Params = Promise<any>;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info: any = await getAutomationInfo(params.id);
  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const query = new QueryClient();
  await PrefetchUserAutomation(query, id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className='flex flex-col items-start gap-y-20'>
        <AutomationsBreadCrumb id={id} />
        <div className='xl:6/12 flex w-full flex-col gap-y-3 rounded-xl border-[1px] border-slate-900 border-opacity-10 p-5 lg:w-10/12'>
          <div className='flex gap-x-2'>
            <Warning />
            When ...
          </div>
          <Trigger id={id} />
        </div>
        <ThenNode id={id} />
        <PostNode id={id} />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
