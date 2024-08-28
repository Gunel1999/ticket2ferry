'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import LangDrop from './LangDrop';

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const nav = useTranslations('Navigation');
  const signReg = useTranslations('SignInRegister');

  return (
    <div className="bg-sky-600 flex justify-center sticky top-0 z-50">
      <nav className="flex justify-between items-center p-6 lg:w-4/5 w-full">
        <Link href={`/${locale}/`}>
          <Image src="/logo.png" width={180} height={65} alt="logo" />
        </Link>
        <div className="flex lg:gap-20 gap-5">
          <Link
            className="lg:text-xl md:text-lg text-base text-white"
            href={`/${locale}/about`}
          >
            {nav('aboutUs')}
          </Link>
          <Link
            className="lg:text-xl md:text-lg text-base text-white"
            href={`/${locale}/explore`}
          >
            {nav('explore')}
          </Link>
          <Link
            className="lg:text-xl md:text-lg text-base text-white"
            href={`/${locale}/booking`}
          >
            {nav('booking')}
          </Link>
          <Link
            className="lg:text-xl md:text-lg text-base text-white"
            href={`/${locale}/contact`}
          >
            {nav('contact')}
          </Link>
        </div>
        <div className="flex lg:gap-10 gap-5 items-center">
          <Link
            className="lg:text-xl md:text-lg text-base text-white"
            href={`/${locale}/sign/signin`}
          >
            {signReg('signIn')}
          </Link>
          <Link href={`/${locale}/sign/register`}>
            <Button title={signReg('register')} />
          </Link>
          <span className="h-10 w-[1px] bg-white" />
          <LangDrop />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
