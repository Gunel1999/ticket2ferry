'use client';

import { useTranslations } from 'next-intl';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const t = useTranslations('IndexPage');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const rockets = [
    { initialX: '-10%', initialY: '40%' },
    { initialX: '50%', initialY: '60%' },
    { initialX: '80%', initialY: '10%' },
  ];

  return (
    <div className="bg-sky-600 h-full w-full" ref={ref}>
      <div className="relative h-dvh w-full">
        <AnimatePresence>
          {rockets.map((rocket, index) => {
            const rockety = useTransform(
              scrollYProgress,
              [0, 1],
              [rocket.initialY, '0%']
            );
            const rocketx = useTransform(
              scrollYProgress,
              [0, 1],
              [rocket.initialX, '100%']
            );
            return (
              <motion.div
                key={index}
                style={{ y: rockety, x: rocketx }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute"
              >
                <Image
                  src="/rocket.png"
                  width={180}
                  height={65}
                  alt={`rocket-${index}`}
                  className="absolute"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <h1 className="md:text-8xl text-6xl text-white font-light w-3/5 py-40 px-10 absolute top-40">
        {t('title')}
      </h1>
    </div>
  );
}
