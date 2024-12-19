'use client';

import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden md:flex-row'>
      {/* Background Pattern */}
      <div className='pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />

      {/* Left Side - Image/Branding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative hidden h-full w-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 md:flex md:w-1/2 md:flex-col md:items-start md:justify-between'
      >
        <div className='absolute inset-0 z-0'>
          <Image
            src='/auth-background.jpg'
            alt='Authentication background'
            fill
            className='object-cover opacity-20'
            priority
          />
        </div>
        <div className='z-10 space-y-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className='text-4xl font-bold text-primary'>Rivenzi</h1>
            <p className='max-w-sm text-lg text-gray-600'>
              Automate your social media responses with artificial .
              intelligence
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='z-10 space-y-6'
        >
          <div className='space-y-4 rounded-xl bg-white/50 p-6 pl-0 backdrop-blur-sm'>
            <h2 className='text-xl font-semibold text-gray-800'>
              Why Choose Rivenzi?
            </h2>
            <ul className='space-y-4 text-gray-600'>
              <li className='flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                  <div className='h-2 w-2 rounded-full bg-primary' />
                </div>
                <span>Intelligent Automated Responses</span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                  <div className='h-2 w-2 rounded-full bg-primary' />
                </div>
                <span>Multi-Network Integration</span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                  <div className='h-2 w-2 rounded-full bg-primary' />
                </div>
                <span>Real-time Analytics</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Sign In Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='flex w-full items-center justify-center p-8 md:w-1/2'
      >
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center md:hidden'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Welcome to Rivenzi
            </h1>
            <p className='mt-2 text-sm text-gray-600'>
              Sign in to manage your social networks
            </p>
          </div>
          <SignIn
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'shadow-xl border rounded-xl p-8 backdrop-blur-sm bg-white/50',
                headerTitle: 'text-2xl font-bold text-center text-gray-900',
                headerSubtitle: 'text-gray-600 text-center',
                formButtonPrimary:
                  'bg-primary hover:bg-primary/90 text-white transition-colors duration-200 rounded-lg py-3',
                formFieldInput:
                  'rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-white/70',
                footerActionLink:
                  'text-primary hover:text-primary/90 font-medium',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500',
                formFieldLabel: 'text-gray-700 font-medium',
                identityPreviewText: 'text-gray-700',
                identityPreviewEditButton: 'text-primary hover:text-primary/90',
                formFieldSuccessText: 'text-green-600',
                formFieldErrorText: 'text-red-600',
                socialButtonsBlockButton:
                  'border-gray-200 hover:bg-gray-50 transition-colors duration-200',
                socialButtonsBlockButtonText: 'text-gray-600 font-medium',
                socialButtonsBlockButtonArrow: 'text-gray-600',
              },
              layout: {
                socialButtonsPlacement: 'bottom',
                showOptionalFields: false,
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
