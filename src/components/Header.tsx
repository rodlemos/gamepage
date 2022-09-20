import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.svg';
import { Searchbar } from './Searchbar';

export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-700 to-slate-700 px-4 py-3 shadow-sm shadow-gray-700 z-10">
      <div className="mx-auto flex justify-between items-center max-w-screen-xl">
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image
              src={logo}
              width={52}
              height={42}
              className="drop-shadow-[0_0_2px_SteelBlue]"
            />
            <span className="hidden lg:inline text-lg text-white font-bold drop-shadow-[0_0_3px_SteelBlue]">
              perienced
            </span>
          </a>
        </Link>

        <div className="flex flex-1 justify-center items-center gap-4">
          <Searchbar />

          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <Link href="/" passHref>
                  <a className="font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300">
                    Champions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guides" passHref>
                  <a className="font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300">
                    Guides
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tutorials" passHref>
                  <a className="font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300">
                    Tutorials
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden lg:inline font-medium text-slate-100">
            Amelina G.
          </span>
          <div className="grid place-items-center w-10 h-10 bg-zinc-300 rounded-full border-2 border-slate-400">
            <Image src={avatar} width={30} height={30} />
          </div>
        </div>
      </div>
    </header>
  );
}
