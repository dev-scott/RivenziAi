'use client';
import { useQueryAutomation } from '@/hooks/user-queries';
import React from 'react';
import ActiveTrigger from './active';
import { Separator } from '@/components/ui/separator';
import ThenAction from '../then/then-action';
import TriggerButton from '../trigger-button';
import { useTriggers } from '@/hooks/use-automations';
import { cn } from '@/lib/utils';
import Keywords from './keywords';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';
import { AUTOMATION_TRIGGERS } from '@/constants/automation';

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id);
  const { data } = useQueryAutomation(id);

  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className='ga-y-6 flex flex-col items-center'>
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />

        {data?.data?.trigger.length > 1 && (
          <>
            <div className='relative my-4 w-6/12'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform px-2'>
                or
              </p>
              <Separator
                orientation='horizontal'
                className='border-[1px] border-muted'
              />
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        )}

        {!data.data.listener && <ThenAction id={id} />}
      </div>
    );
  }
  return (
    <TriggerButton label='Add Trigger'>
      <div className='flex flex-col gap-y-2'>
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              'flex cursor-pointer flex-col gap-y-2 rounded-xl p-3 text-white hover:opacity-80',
              !types?.find((t) => t === trigger.type)
                ? 'bg-background-80'
                : 'bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium'
            )}
          >
            <div className='flex items-center gap-x-2'>
              {trigger.icon}
              <p className='font-bold'>{trigger.label}</p>
            </div>
            <p className='text-sm font-light'>{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types?.length === 0}
          className='bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white'
        >
          <Loader state={isPending}>Create Trigger</Loader>
        </Button>
      </div>
    </TriggerButton>
  );
};

export default Trigger;
