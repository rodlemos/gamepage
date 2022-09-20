import { HiOutlineHeart } from 'react-icons/hi';
import { roles } from '../data';

export function TutorialCard() {
  return (
    <div className="p-2 lg:p-4 bg-slate-700 rounded-sm">
      <img
        src="https://img.youtube.com/vi/Ng6LSYpPbAA/maxresdefault.jpg"
        alt=""
        className="w-[300px] xl:w-80 aspect-video"
      />

      <div className="py-4 flex justify-between items-center">
        <div>
          <img
            src={roles[2].image}
            alt=""
            className="w-7 h-7 grayscale mr-2 inline"
          />
          <h2 className="inline font-bold">Super easy win</h2>
        </div>

        <HiOutlineHeart
          size={25}
          className="text-gray-400 hover:text-rose-500 transition-colors ease-in-out duration-300"
        />
      </div>
    </div>
  );
}
