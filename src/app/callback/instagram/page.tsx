import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: Promise<{
    code?: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const { code } = await searchParams;

  if (code) {
    const response = await onIntegrate(code);
    if (response.status === 200 && response.data) {
      return redirect(`/dashboard/${response.data.firstname}/integrations`);
    }
  }

  return redirect('/dashboard');
};

export default Page;
