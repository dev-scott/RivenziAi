'use client';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import MaxWidthWrapper from './_components/max-width-wrapper';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import {
  BarChart2,
  Brain,
  Combine,
  History,
  Loader2,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { client } from '@/lib/prisma';
import { useSubscription } from '@/hooks/use-subscription';

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = useState<'month' | 'year'>('month');
  const [isMobile, setIsMobile] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      Icon: MessageSquare,
      name: 'Intelligent Auto-Responses',
      description:
        'Our AI analyzes and automatically responds to messages based on your customized rules and defined keywords.',
      href: '/features/auto-reply',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/50 to-transparent' />
      ),
      className: 'lg:col-start-2 lg:col-end-2 lg:row-span-3 ',
    },
    {
      Icon: Combine,
      name: 'Multi-Network Integration',
      description:
        'Connect all your social networks in one place: Instagram, Facebook, Twitter, LinkedIn, and more.',
      href: '/features/integrations',
      cta: 'Discover',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/50 to-transparent' />
      ),
      className: 'lg:row-start-1 lg:col-span-1 ',
    },
    {
      Icon: Sparkles,
      name: 'Custom Triggers',
      description:
        'Create custom triggers based on keywords, hashtags, or message types.',
      href: '/features/triggers',
      cta: 'Explore',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/30 to-transparent' />
      ),
      className: 'lg:row-span-2 lg:col-span-1 lg:col-start-1',
    },
    {
      Icon: BarChart2,
      name: 'Analytics & Reports',
      description:
        'Track the performance of your automations and audience engagement in real-time.',
      href: '/features/analytics',
      cta: 'View metrics',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/50 to-transparent' />
      ),
      className: 'lg:col-span-1 lg:row-span-1',
    },
    {
      Icon: Brain,
      name: 'Contextual AI',
      description:
        'Our AI understands the context of conversations for more relevant and natural responses.',
      href: '/features/ai',
      cta: 'Discover AI',
      background: <div className='absolute inset-0 to-transparent' />,
      className: 'lg:col-span-1 lg:row-span-1',
    },
    {
      Icon: History,
      name: 'History & Learning',
      description:
        'The AI learns from your past interactions to continuously improve its responses.',
      href: '/features/learning',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/50 to-transparent' />
      ),
      className: 'lg:col-span-1 lg:col-start-3 lg:row-start-1',
    },
  ];

  const pricingData = [
    // {
    //   title: 'Starter',
    //   description:
    //     'Perfect for small businesses starting with social media automation',
    //   pricing: {
    //     month: '29',
    //     year: '290', // 2 months free
    //   },
    //   feature: [
    //     {
    //       name: 'Connect up to 3 social media accounts',
    //       active: true,
    //     },
    //     {
    //       name: '100 automated responses per month',
    //       active: true,
    //     },
    //     {
    //       name: '5 custom AI triggers',
    //       active: true,
    //     },
    //     {
    //       name: 'Basic analytics dashboard',
    //       active: true,
    //     },
    //     {
    //       name: 'Email support',
    //       active: true,
    //     },
    //   ],
    // },
    // {
    //   title: 'Professional',
    //   description: 'Ideal for growing businesses with active social presence',
    //   pricing: {
    //     month: '79',
    //     year: '790', // 2 months free
    //   },
    //   feature: [
    //     {
    //       name: 'Connect up to 10 social media accounts',
    //       active: true,
    //     },
    //     {
    //       name: 'Unlimited automated responses',
    //       active: true,
    //     },
    //     {
    //       name: '20 custom AI triggers',
    //       active: true,
    //     },
    //     {
    //       name: 'Advanced analytics & reporting',
    //       active: true,
    //     },
    //     {
    //       name: 'Priority support with 4h response time',
    //       active: true,
    //     },
    //     {
    //       name: 'Custom AI training',
    //       active: true,
    //     },
    //     {
    //       name: 'Team collaboration tools',
    //       active: true,
    //     },
    //   ],
    // },
    {
      title: 'Pro',
      description: 'For large organizations requiring maximum automation power',
      pricing: {
        month: '199',
        year: '1990', // 2 months free
      },
      feature: [
        {
          name: 'Unlimited social media accounts',
          active: true,
        },
        {
          name: 'Unlimited automated responses',
          active: true,
        },
        {
          name: 'Unlimited custom AI triggers',
          active: true,
        },
        {
          name: 'Real-time analytics & custom reports',
          active: true,
        },
        {
          name: '24/7 dedicated support',
          active: true,
        },
        // {
        //   name: 'Advanced AI customization',
        //   active: true,
        // },
        // {
        //   name: 'API access',
        //   active: true,
        // },
        // {
        //   name: 'Custom integration development',
        //   active: true,
        // },
        // {
        //   name: 'SLA guarantee',
        //   active: true,
        // },
      ],
    },
  ];
  const { onSubscribe, isProcessing } = useSubscription();

  const handleGetAccess = () => {
    if (user) {
      onSubscribe(pricingPeriod);
    } else {
      router.push('/sign-in?intent=upgrade');
    }
  };

  return (
    <>
      <section className='h-fit py-24 sm:py-32'>
        <MaxWidthWrapper>
          <div className='flex flex-col items-center gap-10'>
            <div className='relative flex flex-col items-center gap-5'>
              <DotPattern
                className={cn(
                  'w-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
                )}
              />

              <div className='flex flex-col items-center gap-2 md:flex-row'>
                <span className='rounded-full bg-primary px-5 py-2 text-xs text-white'>
                  {' '}
                  New !
                </span>
                Update New features active users ✨
              </div>

              <h1 className='text-center text-base font-semibold md:text-3xl'>
                Empower Your Social Media: Automate, Engage, Succeed!!!
              </h1>
              <span className='text-center'>
                {isMobile ? (
                  <>
                    Unlock seamless social media management with our platform.
                    Automate responses, engage your audience, and track
                    performance with AI technology. Ditch manual updates for a
                    smarter customer connection!
                  </>
                ) : (
                  <>
                    Experience seamless social media management like never
                    before. Our platform empowers you to automate responses,
                    engage your audience, and analyze performance—all driven by
                    advanced AI technology. Say goodbye to the hassle of manual
                    updates and hello to a smarter way to connect with your
                    customers. Elevate your brand&apos;s online presence and
                    watch your engagement soar!
                  </>
                )}
              </span>
            </div>
            <div>
              <div className=' '>
                <HeroVideoDialog
                  className='block dark:hidden'
                  animationStyle='from-center'
                  videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
                  thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
                  thumbnailAlt='Hero Video'
                />
                <HeroVideoDialog
                  className='hidden dark:block'
                  animationStyle='from-center'
                  videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
                  thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
                  thumbnailAlt='Hero Video'
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className='h-fit bg-gradient-to-b from-gray-100 to-white py-24'>
        <MaxWidthWrapper>
          <div className='relative flex flex-col items-center gap-2'>
            <span className='text-primary'>Solution</span>
            <h1 className='mdtext-3xl text-center text-xl font-semibold'>
              Empower Your Business with AI Workflows
            </h1>

            <span className='text-center text-foreground/70'>
              Generic AI tools won&apos;t suffice. Our platform is purpose-built
              to provide exceptional <br /> AI-driven solutions for your unique
              business needs.
            </span>

            <BentoGrid className='mt-14 lg:grid-rows-3'>
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className='h-fit py-16' id='pricing'>
        <MaxWidthWrapper>
          <div className='relative flex flex-col items-center gap-2'>
            <span className='text-primary'>PRICING</span>
            <h1 className='text-center text-xl font-semibold md:text-3xl'>
              Choose the plan that&apos;s right for you
            </h1>
            {!isMobile && (
              <span className='text-center text-foreground/70'>
                Generic AI tools won&apos;t suffice. Our platform is
                purpose-built to provide exceptional <br /> AI-driven solutions
                for your unique business needs.
              </span>
            )}

            <div className='flex flex-col items-center pt-12'>
              <div className='flex items-center justify-center gap-2'>
                <button
                  type='button'
                  className={cn(
                    'relative w-1/2 whitespace-nowrap rounded-md p-3 py-2 text-sm font-medium focus:outline-none sm:w-auto sm:px-8',
                    pricingPeriod === 'month'
                      ? 'bg-primary text-white shadow-sm'
                      : ''
                  )}
                  onClick={() => setPricingPeriod('month')}
                >
                  Monthly billing
                </button>
                <button
                  type='button'
                  className={cn(
                    'relative w-1/2 whitespace-nowrap rounded-md border border-transparent p-3 py-2 text-sm font-medium text-slate-900 focus:outline-none sm:w-auto sm:px-8',
                    pricingPeriod === 'year'
                      ? 'bg-primary text-white shadow-sm'
                      : ''
                  )}
                  onClick={() => setPricingPeriod('year')}
                >
                  Yearly billing
                </button>
              </div>
              <div className='mt-12 w-full space-y-3 sm:mt-16 sm:gap-6 sm:space-y-0 md:mx-auto'>
                {pricingData.map((pricing, key) => (
                  <div
                    className='flex w-full flex-row flex-wrap divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'
                    key={key}
                  >
                    <div className='p-6'>
                      <h2 className='text-xl font-bold leading-6 text-slate-900'>
                        {pricing.title}
                      </h2>
                      <p className='mt-2 text-base leading-tight text-slate-700'>
                        {pricing.description}
                      </p>

                      {pricingPeriod == 'month' ? (
                        <p className='mt-8'>
                          <span className='text-4xl font-bold tracking-tighter text-slate-900'>
                            ${pricing.pricing.month}
                          </span>

                          <span className='text-base font-medium text-slate-500'>
                            /mo
                          </span>
                        </p>
                      ) : (
                        <p className='mt-8'>
                          <span className='text-4xl font-bold tracking-tighter text-slate-900'>
                            ${pricing.pricing.year}
                          </span>

                          <span className='text-base font-medium text-slate-500'>
                            /yr
                          </span>
                        </p>
                      )}

                      <button
                        onClick={handleGetAccess}
                        className='mt-8 flex w-full flex-row items-center justify-center rounded-md bg-primary py-2 text-center text-sm font-semibold text-white'
                      >
                        {isProcessing ? (
                          <Loader2 className='animate-spin' />
                        ) : (
                          `Join as a ${pricing.title}`
                        )}
                      </button>
                    </div>

                    <div className='px-6 pb-8 pt-6'>
                      <h3 className='text-sm font-bold uppercase tracking-wide text-slate-900'>
                        What&apos;s included
                      </h3>

                      <ul role='list' className='mt-4 space-y-3'>
                        {pricing.feature.map((feature, key) => (
                          <li className='flex space-x-3' key={key}>
                            {feature.active && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 flex-shrink-0 text-green-400'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                stroke-width='2'
                                stroke='currentColor'
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                aria-hidden='true'
                              >
                                <path
                                  stroke='none'
                                  d='M0 0h24v24H0z'
                                  fill='none'
                                ></path>
                                <path d='M5 12l5 5l10 -10'></path>
                              </svg>
                            )}
                            <span className='text-base text-slate-700'>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
