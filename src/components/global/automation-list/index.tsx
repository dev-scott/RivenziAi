'use client';

import { useMutationDataState } from '@/hooks/use-mutation-data';
import { usePaths } from '@/hooks/use-nav';
import { useQueryAutomations } from '@/hooks/user-queries';
import React, { useMemo } from 'react';
import CreateAutomation from '../create-automation';
import Link from 'next/link';
import { cn, getMonth } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AutomationList = () => {
  const { data } = useQueryAutomations();

  const { latestVariable } = useMutationDataState(['create-automation']);
  console.log(latestVariable);
  const { pathname } = usePaths();

  const optimisticUiData = useMemo(() => {
    if (latestVariable && latestVariable?.variables && data) {
      const test = [latestVariable.variables, ...data.data];
      console.log(test);

      return { data: test };
    }
    return data || { data: [] };
  }, [latestVariable, data]);

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className='flex h-[70vh] flex-col items-center justify-center gap-y-3'>
        <h3 className='text-lg text-gray-400'>No Automations </h3>
        <CreateAutomation />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-y-3'>
      {optimisticUiData.data!.map((automation: any) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className='radial--gradient--automations flex rounded-xl border-[1px] border-foreground/15 p-5 transition duration-100 hover:opacity-80'
        >
          <div className='flex flex-1 flex-col items-start'>
            <h2 className='text-xl font-semibold text-foreground'>
              {automation.name}
            </h2>
            <p className='mb-2 text-sm font-light text-foreground/75'>
              This is from the comment
            </p>

            {automation.keywords.length > 0 ? (
              <div className='mt-3 flex flex-wrap gap-x-2'>
                {automation.keywords.map(
                  (keyword: { id: string; word: string }, key: any) => (
                    <div
                      key={keyword.id}
                      className={cn(
                        'rounded-xl px-4 py-1 capitalize text-primary',
                        (0 + 1) % 1 == 0 &&
                          'bg-keyword-green/15 border-2 border-primary',
                        (1 + 1) % 2 == 0 &&
                          'bg-keyword-purple/15 border-2 border-primary',
                        (2 + 1) % 3 == 0 &&
                          'bg-keyword-yellow/15 border-2 border-primary',
                        (3 + 1) % 4 == 0 &&
                          'bg-keyword-red/15 border-2 border-primary'
                      )}
                    >
                      {keyword.word}
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className='mt-3 rounded-xl border-2 border-dashed border-primary px-3 py-1'>
                <p className='text-sm text-primary'>No Keywords</p>
              </div>
            )}
          </div>
          <div className='flex flex-col justify-between'>
            <p className='text-sm font-light capitalize text-[#9B9CA0]'>
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{' '}
              {automation.createdAt.getUTCFullYear()}
            </p>

            {automation.listener?.listener === 'SMARTAI' ? (
              <Button className='hover:bg-background-80 w-full bg-primary text-white'>
                Smart AI
              </Button>
            ) : (
              <Button className='hover:bg-background-80 bg-primary text-white'>
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomationList;
