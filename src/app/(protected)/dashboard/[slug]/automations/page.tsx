import AutomationList from '@/components/global/automation-list';
import CreateAutomation from '@/components/global/create-automation';
import React from 'react';

const Page = () => {
  return (
    <div className='grid-col1 grid gap-5 lg:grid-cols-6'>
      <div className='lg:col-span-4'>
        {/* automations list */}
        <AutomationList />
      </div>
      <div className='lg:col-span-2'>
        <div className='flex flex-col gap-y-5 overflow-hidden rounded-xl border-[1px] border-foreground/15 p-5'>
          <div>
            <h2 className='text-xl text-foreground'>Automation</h2>
            <p>Your live automations will show here.</p>
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default Page;
