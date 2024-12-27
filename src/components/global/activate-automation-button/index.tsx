import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useQueryAutomation } from '@/hooks/user-queries';
import { useMutationData } from '@/hooks/use-mutation-data';
import { activateAutomation } from '@/actions/automations';
import { ActiveAutomation } from '@/icons/active-automation';

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ['activate'],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    'automation-info'
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !data?.data?.active })}
      className='ml-4 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white hover:opacity-80 lg:px-10'
    >
      {isPending ? <Loader2 className='animate-spin' /> : <ActiveAutomation />}

      <p className='hidden lg:inline'>
        {data?.data?.active ? 'Disable' : 'Activate'}
      </p>
    </Button>
  );
};

export default ActivateAutomationButton;
