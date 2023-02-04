interface Props {
  image: string;
  title: string;
  date: Date;
  lane: {
    name: string;
    image_url: string;
  };
  items: {
    item: {
      id: string;
      image_url: string;
    };
  }[];
}

export function GuideCard({ date, image, lane, title, items }: Props) {
  const dateFormatted = new Date(date).toLocaleDateString();

  return (
    <div className="mx-auto gap-2 md:gap-3 flex w-full p-2 md:px-3 bg-gradient-to-b from-cyan-800 to-slate-900 rounded-md cursor-pointer hover:outline hover:outline-1 hover:outline-rose-600">
      <img src={image} alt="" className="w-20 h-20 md:w-24 md:h-24" />

      <div className="flex-1">
        <h2 className="font-semibold leading-none">
          <img
            src={lane.image_url}
            alt=""
            className="w-5 h-5 mr-1 inline-block -hue-rotate-[210deg]"
          />
          {title}
        </h2>
        <p className="text-xs md:text-sm font-light text-gray-300 mb-2">
          updated at{' '}
          <span className="text-xs md:text-sm font-light text-orange-300">
            {dateFormatted}
          </span>
        </p>
        <span className="px-4 py-1 bg-gradient-to-r from-orange-300 to-rose-700 rounded-full font-bold text-sm uppercase">
          new
        </span>
      </div>

      <div className="hidden lg:flex lg:items-center gap-1">
        {items.map((item) => (
          <img
            src={item.item.image_url}
            alt=""
            key={item.item.id}
            className="w-12 h-12 rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}
