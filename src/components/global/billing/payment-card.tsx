import { onDowngradeSubscription } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { PLANS } from '@/constants/pages';
import { useSubscription } from '@/hooks/use-subscription';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  label: string;
  current: 'PRO' | 'FREE';
  landing?: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
  const { onSubscribe, isProcessing } = useSubscription();

  const makeSubscription = async () => {
    if (current == 'FREE' && current != label) {
      onSubscribe();
    }

    if (current == 'PRO' && current != label) {
      const customer = await onDowngradeSubscription();

      if (customer.status === 200) {
        return redirect('/dashboard');
      }
    }
  };

  return (
    <div
      className={cn(
        label !== current
          ? 'bg-in-active text-foreground'
          : 'bg-gradient-to-r text-foreground',
        'overflow-hidden rounded-xl p-[2px]'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'bg-background-90 flex h-full flex-col rounded-xl py-5 pl-5 pr-10'
        )}
      >
        {landing ? (
          <h2 className='text-2xl'>
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className='text-2xl'>
            {label === current
              ? 'Your Current Plan'
              : current === 'PRO'
                ? 'Downgrade'
                : 'Upgrade'}
          </h2>
        )}
        <p className='text-text-secondary mb-2 text-sm'>
          This is what your plan covers for automations and Ai features
        </p>
        {label === 'PRO' ? (
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent'>
            Smart AI
          </span>
        ) : (
          <p className='text-text-secondary mt-2 font-bold'>Standard</p>
        )}
        {label === 'PRO' ? (
          <p className='mb-2'>
            <b className='text-xl'>$99</b>/month
          </p>
        ) : (
          <p className='mb-2 text-xl'>Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p key={i} className='mt-2 flex gap-2 text-muted-foreground'>
            <CircleCheck className='text-indigo-500' />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'mt-5 rounded-full',
              label === 'PRO'
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                : 'bg-background-80 hover:text-background-80 text-white'
            )}
          >
            {label === current
              ? 'Get Started'
              : current === 'PRO'
                ? 'Free'
                : 'Get Started'}
          </Button>
        ) : (
          <Button
            onClick={makeSubscription}
            className='hover:text-background-80 mt-5 rounded-xl bg-primary text-white'
            disabled={label === current}
          >
            {label === current
              ? 'Active'
              : current === 'PRO'
                ? 'Downgrade'
                : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
