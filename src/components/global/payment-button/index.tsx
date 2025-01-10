import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';
import { CreditCardIcon, Loader2 } from 'lucide-react';
import React from 'react';

type Props = {};

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button
      disabled={isProcessing}
      onClick={() => onSubscribe('month')}
      className='rounded-xl bg-gradient-to-br from-[#6d60a3] via-primary to-[#CC3BD4] font-bold text-white'
    >
      {isProcessing ? <Loader2 className='animate-spin' /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
