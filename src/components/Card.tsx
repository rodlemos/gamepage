interface Props {
  title?: string;
  description?: string;
  image: string;
}

export function Card({ image, description, title }: Props) {
  return (
    <div className="w-[300px] p-2 bg-gradient-to-b from-cyan-900 to-slate-800 rounded-md flex items-center gap-2 cursor-pointer hover:outline hover:outline-1 hover:outline-rose-600">
      <img src={image} alt="" className="w-20" />
      <div>
        <span className="mb-2 text-sm font-regular text-gray-100">
          [12.17]<span className="uppercase">Mid Beast Build </span>
        </span>
        <p className="text-xs font-light">
          updated at <span className="text-orange-300">12/09/2022</span>{' '}
        </p>

        <div className="flex gap-1 mt-2">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/6655.png"
            alt=""
            className="w-7 h-7"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/3020.png"
            alt=""
            className="w-7 h-7"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/4645.png"
            alt=""
            className="w-7 h-7"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/3157.png"
            alt=""
            className="w-7 h-7"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/3089.png"
            alt=""
            className="w-7 h-7"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/3135.png"
            alt=""
            className="w-7 h-7"
          />
        </div>
      </div>
    </div>
  );
}
