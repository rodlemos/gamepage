import { roles } from '../data';

interface Props {
  image: string;
  title: string;
  description: string;
  lane: 'top' | 'jg' | 'mid' | 'adc' | 'sup';
}

export function GuideCard({ description, image, lane, title }: Props) {
  const lanes = {
    top: roles[0].image,
    jg: roles[1].image,
    mid: roles[2].image,
    adc: roles[3].image,
    sup: roles[4].image,
  };

  return (
    <div className="max-w-2xl mx-auto gap-2 flex w-full p-2 bg-gradient-to-bl from-cyan-800 to-slate-800 rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-rose-600">
      <img src={image} alt="" className="w-20 h-20" />

      <div>
        <h2 className="font-semibold md:text-lg leading-none uppercase">
          <img
            src={lanes[lane]}
            alt=""
            className="w-5 h-5 mr-1 inline-block -hue-rotate-[210deg]"
          />
          {title}
        </h2>
        <p className="text-xs md:text-sm font-light text-gray-300 mb-2">
          {description}
        </p>
        <span className="px-4 py-1 bg-gradient-to-r from-orange-300 to-rose-700 rounded-full font-bold text-sm uppercase">
          new
        </span>
      </div>
    </div>
  );
}
