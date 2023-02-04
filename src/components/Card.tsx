interface Props {
  title: string;
  date: Date;
  image: string;
  items: {
    id: string;
    item: {
      image_url: string;
    };
  }[];
}

export function Card({ image, date, title, items }: Props) {
  const formattedDate = new Date(date).toLocaleDateString();
  const titleSize = titleResize(title);

  function titleResize(title: string) {
    if (title.length > 23) {
      const short = `${title.substring(0, 23)}...`;
      return short;
    }

    return title;
  }

  return (
    <div className="p-2 bg-gradient-to-b from-cyan-900 to-slate-900 rounded-md flex items-center gap-2 cursor-pointer hover:outline hover:outline-1 hover:outline-rose-600">
      <img src={image} alt="" className="w-20" />
      <div>
        <span className="mb-2 text-sm font-semibold text-gray-100">
          {titleSize}
        </span>
        <p className="text-xs font-light">
          updated at <span className="text-orange-300">{formattedDate}</span>{' '}
        </p>

        <div className="flex gap-1 mt-2">
          {items.map((item) => (
            <img
              src={item.item.image_url}
              alt=""
              className="w-7 h-7"
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
