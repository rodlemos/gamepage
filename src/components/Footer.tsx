import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-slate-700 shadow-[0_-1px_2px_0_DarkSlateGray] z-10">
      <div className="max-w-screen-lg mx-auto py-6 px-2">
        <div>
          <span className="block text-center md:text-left">
            © Copyright 2022 Company All rights reserved.
          </span>
          <p className="text-center md:text-left text-xs mt-2 text-slate-300">
            This page isn&#39;t endorsed by Riot Games and doesn&#39;t reflect
            the views or opinions of Riot Games or anyone officially involved in
            producing or managing League of Legends. League of Legends and Riot
            Games are trademarks or registered trademarks of Riot Games, Inc.
            League of Legends © Riot Games, Inc.
          </p>
        </div>

        <div className="flex gap-3 justify-center md:justify-start mt-4">
          <AiFillFacebook
            size={30}
            className="text-slate-200 hover:text-rose-500 transition-colors ease-in-out duration-300"
          />
          <AiFillInstagram
            size={30}
            className="text-slate-200 hover:text-rose-500 transition-colors ease-in-out duration-300"
          />
          <AiOutlineTwitter
            size={30}
            className="text-slate-200 hover:text-rose-500 transition-colors ease-in-out duration-300"
          />
          <FaDiscord
            size={30}
            className="text-slate-200 hover:text-rose-500 transition-colors ease-in-out duration-300"
          />
        </div>
      </div>
    </footer>
  );
}
