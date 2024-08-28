'use client';

import React, { useState, useEffect, useRef, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useRouter } from 'next/navigation';

const LangDrop = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setSelected(savedLanguage);
      const pathWithoutLocale = window.location.pathname.replace(
        /^\/[a-z]{2}/,
        ''
      );
      router.replace(`/${savedLanguage}${pathWithoutLocale}`);
    }
  }, [router]);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    localStorage.setItem('language', value);
    const pathWithoutLocale = window.location.pathname.replace(
      /^\/[a-z]{2}/,
      ''
    );
    router.replace(`/${value}${pathWithoutLocale}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-block relative" ref={dropdownRef}>
      <button
        className="bg-transparent text-white outline-none h-10 w-10 border-2 border-white rounded-full cursor-default mr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.toUpperCase()}
      </button>
      <KeyboardArrowDownRoundedIcon
        className="text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bg-white text-sky-600 w-12 mt-2 rounded shadow-lg overflow-hidden"
          >
            <li
              className="px-3 py-2 hover:bg-sky-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => handleSelect('en')}
            >
              EN
            </li>
            <li
              className="px-3 py-2 hover:bg-sky-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => handleSelect('az')}
            >
              AZ
            </li>
            <li
              className="px-3 py-2 hover:bg-sky-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => handleSelect('ru')}
            >
              RU
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangDrop;
