'use client';
import { PAGE_BREAD_CRUMBS } from '@/constants/pages';
import { usePaths } from '@/hooks/use-nav';
import React from 'react';
import Sheet from '../sheet';
import { Menu } from 'lucide-react';
import { HelpDuoToneWhite } from '@/icons';
import Items from '../sidebar/items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import Search from '../search';
import CreateAutomation from '../create-automation';
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb';

type Props = {
  slug: string;
};

const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths();
  console.log('slug and page', slug, page);

  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className='mb-3 flex flex-col'>
        <div className='flex items-center justify-end gap-x-3'>
          <span className='flex flex-1 items-center gap-x-2 lg:hidden'>
            <Sheet trigger={<Menu />} side='left' className='lg:hidden'>
              <div className='flex h-full w-full flex-col gap-y-5'>
                <div className='px-3'>Rivenzi</div>
                <div className='flex flex-col py-3'>
                  <Items page={page} slug={slug} />
                </div>
                <div className='px-10'>
                  <Separator
                    orientation='horizontal'
                    className='bg-slate-900'
                  />
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
              </div>
            </Sheet>
          </span>

          <Search />
          <CreateAutomation />
          {/* <Notification /> */}
        </div>
        <div>
          {/* <MainBreadCrumb page={page === slug ? 'home' : page} slug={slug} /> */}
          <MainBreadCrumb page={page === slug ? 'Home' : page} slug={slug} />
        </div>
      </div>
    )
  );
};

export default InfoBar;
