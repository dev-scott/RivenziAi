import { onBoardUser } from '@/actions/user';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await onBoardUser();

  if (user.status === 200 || user.status == 201) {
    return redirect(`dashboard/${user.data?.firstname}`);
  }
  return redirect('/sign-in');
};

export default page;
