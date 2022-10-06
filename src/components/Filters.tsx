import { useState } from 'react';

interface Props {
  roles: {
    id: string;
    name: string;
    image_url: string;
  }[];
  category: string;
  setCategory: (category: string) => void;
}

export function Filters({ roles, category, setCategory }: Props) {
  const [value, setValue] = useState(null);

  function handleChangeCategory(index: number, role_id: string) {
    setValue(index);

    if (role_id === category) {
      setValue(null);
      return setCategory('');
    }

    setCategory(role_id);
  }

  return (
    <nav className="flex gap-4 items-center flex-wrap mx-auto">
      <div className="flex gap-2 w-full max-w-sm items-center">
        <span className="leading-none font-semibold text-gray-300">
          Champion
        </span>
        <div className="flex-1 bg-slate-800 rounded-md border border-slate-600 focus-within:outline focus-within:outline-1 focus-within:outline-red-500">
          <input
            className="bg-transparent w-full h-9 pl-2 outline-none placeholder:text-sm"
            placeholder="Name"
          />
        </div>
      </div>

      <ul className="flex justify-center items-center gap-2 md:gap-4">
        <span className="leading-none font-semibold text-gray-300">Roles:</span>
        {roles?.map((role, index) => (
          <li
            key={role.id}
            className="flex md:gap-1 md:items-center group cursor-pointer"
            onClick={() => handleChangeCategory(index, role.id)}
          >
            <img
              src={role.image_url}
              alt={role.name}
              className={`w-7 h-7 ${
                value === index && 'hue-rotate-180 md:hue-rotate-0'
              }`}
            />
            <span
              className={`hidden md:inline-block text-sm text-gray-400 uppercase group-hover:text-rose-500 ${
                value === index && 'text-rose-500'
              }`}
            >
              {role.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
