import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.svg';
import { Searchbar } from './Searchbar';
import { useRouter } from 'next/router';

export function Header() {
  const { pathname } = useRouter();

  return (
    <header className="relative w-full bg-gradient-to-r from-gray-700 to-slate-700 px-4 py-3 shadow-sm shadow-gray-700 z-10">
      <div className="mx-auto flex justify-between items-center max-w-screen-xl">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <Image
              src={logo}
              width={52}
              height={42}
              className="drop-shadow-[0_0_2px_SteelBlue]"
              alt="Page logo in X shape"
            />
            <span className="hidden lg:inline text-lg text-white font-bold drop-shadow-[0_0_3px_SteelBlue]">
              perienced
            </span>
          </a>
        </Link>

        <div className="flex flex-1 justify-center items-center gap-4">
          <Searchbar />

          <nav className="absolute flex items-center justify-center md:inline-block w-full md:w-auto py-1 md:p-0 top-[65px] left-0 md:static bg-slate-600 md:bg-transparent">
            <ul className="flex gap-4">
              <li>
                <Link href="/" passHref legacyBehavior>
                  <a
                    className={`text-sm font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300 ${
                      pathname === '/champions' && 'text-rose-500'
                    }`}
                  >
                    Champions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guides" passHref legacyBehavior>
                  <a
                    className={`text-sm font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300 ${
                      pathname === '/guides' && 'text-rose-500'
                    }`}
                  >
                    Guides
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tutorials" passHref legacyBehavior>
                  <a
                    className={`text-sm font-bold text-gray-300 hover:text-rose-500 trasition-colors ease-linear duration-300 ${
                      pathname === '/tutorials' && 'text-rose-500'
                    }`}
                  >
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
            <Image src={avatar} width={30} height={30} alt="Profile avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
