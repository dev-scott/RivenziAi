'use client';
import { onBoardUser, onCurrentUser, onUserInfo } from '@/actions/user';
import { currentUser } from '@clerk/nextjs/server';
import axios from 'axios';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const myUser = await onUserInfo();
  const user = await onBoardUser();
  console.log('user i have', user);

  if (!user) {
    return redirect('/sign-in');
  }

  const intent = searchParams.intent;

  if (user.status === 200 || user.status == 201) {
    if (intent == 'upgrade' && myUser.data?.subscription?.plan != 'PRO') {
      const response = await axios.get('/api/payment');
      console.log('response api', response);
      if (response.data.status === 200) {
        return (window.location.href = `${response.data.session_url}`);
      }
      return;
    }

    return redirect(`dashboard/${user.data?.firstname}`);
  }
};

export default page;
