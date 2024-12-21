import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ReactQueryProvider from '@/providers/react-query-provider';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// const eb_garamond = EB_Garamond({
//   subsets: ["latin"],
//   variable: "--font-heading",
// })

export const metadata: Metadata = {
  title: 'Rivenzi',
  description: 'Automation ai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className={` ${inter.className} `}>
        <body className='flex min-h-full flex-col bg-white text-foreground antialiased'>
          <main className='relative flex flex-1 flex-col'>
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
