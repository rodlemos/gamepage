import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bg: string;
  border: string;
}

export function Button({ bg, border, title, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`px-[0.6em] text-sm md:text-base rounded-sm border-2  text-white md:text-lg lg:text-xl ${bg} ${border}`}
      {...rest}
    >
      {title}
    </button>
  );
}
