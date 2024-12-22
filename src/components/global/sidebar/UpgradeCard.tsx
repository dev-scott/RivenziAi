import React from 'react';
import PaymentButton from '../payment-button';

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-xl bg-primary p-3 placeholder-gray-400'>
      <span className='text-sm'>
        Upgrade to{' '}
        <span className='bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] bg-clip-text font-bold text-transparent'>
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
