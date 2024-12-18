import { Button } from '@/components/ui/button';
import React from 'react';
import Loader from '../loader';
import { AutomationDuoToneWhite } from '@/icons';

const CreateAutomation = () => {
  return (
    <Button className='py-6 text-base font-medium'>
      <Loader state={false}>
        <AutomationDuoToneWhite />

        <p className='hidden lg:inline'>Create an automotion</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
