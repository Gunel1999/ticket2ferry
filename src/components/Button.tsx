import React from 'react';

const Button = ({ title }: { title: string }) => {
  return (
    <button className="bg-yellow-300 p-2 px-8 rounded-md border-2 border-yellow-300 text-sky-700 hover:bg-yellow-400 hover:border-yellow-400 transition-all active:text-yellow-300 active:bg-transparent lg:text-xl md:text-lg text-base">
      {title}
    </button>
  );
};

export default Button;
