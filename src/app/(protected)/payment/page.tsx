import { onSubscribe } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: {
    session_id?: string;
    cancel?: boolean;
  };
};

const Page = ({ searchParams: { cancel, session_id } }: Props) => {
  if (session_id) {
    const customer = onSubscribe(session_id);

    // if (customer.status === 200) {
    //   return redirect('/dashboard');
    // }

    return (
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <h4 className='text-5xl font-bold'>404</h4>
        <p className='text-xl font-bold'>Oppse! Something went wrong</p>
      </div>
    );
  }

  if (cancel) {
    return (
      <div className='"flex w-full" h-screen flex-col items-center justify-center'>
        <h4 className='text-5xl font-bold'>404</h4>
        <p className='text-xl font-bold'>Oppse! Something went wrong</p>
      </div>
    );
  }
};

export default Page;
