'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';

const AlwaysOn = () => {
  const t = useTranslations('IndexPage');
  return (
    <Parallax pages={1.4} className="overflow-y-scroll no-scrollbar">
      <ParallaxLayer
        offset={0}
        sticky={{ start: 0, end: 0.5 }}
        factor={0.5}
        speed={0.5}
      >
        <h1 className="lg:text-8xl md:text-7xl text-white font-light relative lg:left-64 md:left-32 top-40 lg:w-[50%] md:w-[70%]">
          {t('title')}
        </h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.95} speed={0.3} factor={0.6}>
        <div className="bg-[url('/bg_logo.png')] bg-contain bg-center bg-no-repeat w-screen h-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={1.12} factor={0.1} speed={0.1}>
        <div className="bg-yellow-300 w-[3500px] h-[3500px] absolute xl:-left-[810px] lg:-left-[1200px] md:-left-[1300px] sm:-left-[1400px] -left-[1500px] rounded-full" />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AlwaysOn;
