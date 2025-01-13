'use client';
import { usePaths } from '@/hooks/use-nav';
import React from 'react';
import Items from './items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';
import { SubscriptionPlan } from '../subscription-plan';
import UpgradeCard from './UpgradeCard';

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div className='fixed bottom-0 left-0 top-0 hidden w-[250px] overflow-hidden border-[1px] p-3 lg:inline-block'>
      <div className='flex h-full w-full flex-col gap-y-5'>
        <div className='px-3'>Rivenzi.</div>
        <div className='flex flex-col py-3'>
          <Items page={page} slug={slug} />
        </div>
        <div className='px-10'>
          <Separator orientation='horizontal' className='bg-slate-900' />
        </div>
        <div className='flex flex-col gap-y-5 p-3'>
          <div className='flex gap-x-3'>
            <ClerkAuthState />

            <p className='text-slate-900'>Profile</p>
          </div>
          <div className='flex gap-x-3'>
            <HelpDuoToneWhite />

            <p className='text-slate-900'>Help</p>
          </div>
        </div>
        <SubscriptionPlan type='FREE'>
          <div className='flex flex-1 flex-col justify-end'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
