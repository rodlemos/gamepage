import { HiOutlineHeart } from 'react-icons/hi';

interface Props {
  video_id: string;
  title: string;
  role?: {
    image_url: string;
  };
}

export function TutorialCard({ title, video_id, role }: Props) {
  return (
    <div className="h-full p-2 lg:p-4 bg-slate-700 rounded-sm hover:brightness-110 transition-colors duration-300">
      <img
        src={`https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`}
        alt=""
        className="w-full aspect-video"
      />

      <div className="py-4 flex justify-between items-start">
        {role && (
          <img
            src={role?.image_url}
            alt=""
            className="w-7 h-7 mr-2 inline opacity-80"
          />
        )}

        <div className="flex-1">
          <h2 className="inline font-bold">{title}</h2>
        </div>

        <HiOutlineHeart
          size={25}
          className="text-gray-400 hover:text-rose-500 transition-colors ease-in-out duration-300"
        />
      </div>
    </div>
  );
}
