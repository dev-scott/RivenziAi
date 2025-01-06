'use client';
import { useSubscription } from '@/hooks/use-subscription';
import React, { useEffect } from 'react';

interface DashboardClientProps {
  intent?: string;
  user: any;
}

const DashboardClient = ({ intent, user }: DashboardClientProps) => {
  const { onSubscribe } = useSubscription();
  console.log('intent in dashboard client', intent);

  useEffect(() => {
    if (intent == 'upgrade') {
      console.log('Executing onSubscribe for intent:', intent);
      onSubscribe();
    }
  }, [intent, onSubscribe]);

  return <div>index</div>;
};

export default DashboardClient;
