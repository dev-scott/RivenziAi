import { usePathname } from 'next/navigation';

export const usePaths = () => {
  const pathname = usePathname();
  const path = pathname.split('/');
  console.log('path', path);
  const page = path[path.length - 1];
  console.log('page', page);
  return { page, pathname };
};
