import { ReactElement } from 'react';

interface Props {
  icon?: ReactElement;
  title: string;
}

export function PrimaryButton({ title, icon }: Props) {
  return (
    <button
      type="button"
      className="grid place-items-center py-[0.4em] px-[1.2em] relative before:rounded-md before:inset-0 before:absolute before:bg-gradient-to-br before:from-orange-300 before:to-rose-600 hover:before:brightness-90 before:transition before:ease-linear before:duration-200"
    >
      {icon}
      <span className="relative font-semibold">{title}</span>
    </button>
  );
}
