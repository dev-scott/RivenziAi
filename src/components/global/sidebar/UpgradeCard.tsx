import React from 'react';
import PaymentButton from '../payment-button';

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-3 rounded-xl border-[1px] bg-slate-950 bg-white/15 p-3 text-foreground placeholder-gray-400'>
      <span className='text-sm text-white'>
        Upgrade to{' '}
        <span className='bg-gradient-to-r from-primary to-[#D064AC] bg-clip-text font-bold text-transparent'>
          Smart AI
        </span>
      </span>

      <p className='text-sm font-light text-foreground'>
        Unlock all feature <br /> including Ai and more
      </p>
      <PaymentButton />
    </div>
  );
};

export default UpgradeCard;
