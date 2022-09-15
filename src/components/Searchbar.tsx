import { BsSearch } from 'react-icons/bs';

export function Searchbar() {
  return (
    <div className="flex flex-1 max-w-xs h-10 mx-2 items-center">
      <form className="flex w-full h-full bg-slate-800 rounded-full focus-within:outline focus-within:outline-1 focus-within:outline-red-500">
        <input
          className="flex-1 bg-transparent border-transparent pl-3 text-sm focus:outline-none"
          placeholder="Search..."
          size={10}
        />

        <button type="submit" className="w-10 grid place-items-center">
          <BsSearch size={20} className="text-gray-400" />
        </button>
      </form>
    </div>
  );
}
