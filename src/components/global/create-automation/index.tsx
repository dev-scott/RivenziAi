'use client';
import { Button } from '@/components/ui/button';
import React, { useMemo } from 'react';
import Loader from '../loader';
import { AutomationDuoToneWhite } from '@/icons';
import { v4 } from 'uuid';
import { useCreateAutomation } from '@/hooks/use-automations';

const CreateAutomation = () => {
  const mutationId = useMemo(() => v4(), []);
  const { isPending, mutate } = useCreateAutomation(mutationId);
  return (
    <Button
      className='py-6 text-base font-medium'
      onClick={() =>
        mutate({
          name: 'Untitled',
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />

        <p className='hidden lg:inline'>Create an automotion</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
