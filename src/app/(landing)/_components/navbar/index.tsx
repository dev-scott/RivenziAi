'use client';

import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import MaxWidthWrapper from '../max-width-wrapper';
import ShimmerButton from '@/components/ui/shimmer-button';

const routes = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Pricing',
    href: '#pricing',
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-xl'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold'>Rivenzi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-6 md:flex'>
            {routes.map((route) => (
              <>
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === route.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {route.label}
                </Link>
                <div className='h-4 w-px bg-gray-300' />
              </>
            ))}

            <Button className=''>
              <Link href='/sign-in'>Get started</Link>
              <ArrowRight />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <SheetHeader>
                  <span className='text-lg font-bold'>Menu</span>
                </SheetHeader>
                <div className='mt-6 flex flex-col space-y-4'>
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
                        pathname === route.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}

                  <ShimmerButton className='mt-4 shadow-2xl'>
                    <Link href='/dashboard'>Get started</Link>
                  </ShimmerButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
