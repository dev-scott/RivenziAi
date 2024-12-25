import { onSubscribe } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

// Next.js passe automatiquement les searchParams via le type PageProps
const Page = async ({
  searchParams,
}: {
  searchParams: { session_id?: string; cancel?: boolean };
}) => {
  const { session_id, cancel } = searchParams;

  if (session_id) {
    const customer = await onSubscribe(session_id);

    if (customer.status === 200) {
      redirect('/dashboard');
    } else {
      return (
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <h4 className='text-5xl font-bold'>404</h4>
          <p className='text-xl font-bold'>Oops! Something went wrong</p>
        </div>
      );
    }
  }

  if (cancel) {
    return (
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <h4 className='text-5xl font-bold'>404</h4>
        <p className='text-xl font-bold'>Oops!! Something went wrong</p>
      </div>
    );
  }

  // Default fallback if neither session_id nor cancel exists
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h4 className='text-5xl font-bold'>404</h4>
      <p className='text-xl font-bold'>Oops! Invalid Request</p>
    </div>
  );
};

export default Page;
