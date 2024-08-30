import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import Navbar from '@/components/Navbar';
import AlwaysOn from '@/components/AlwaysOn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticket2Ferry',
  description: 'Find the Best Route to Happiness',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className={inter.className}>
          <Navbar locale={locale} />
          <main className="min-h-dvh bg-sky-600 flex justify-center relative ">
            <AlwaysOn />
            <div className=" md:w-4/5 w-full min-h-dvh">{children}</div>
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
