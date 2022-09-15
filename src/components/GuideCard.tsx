interface Props {
  image: string;
  title: string;
  description: string;
  lane: string;
}

const roles = {
  top: 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/TOP.png?raw=true',
  jg: 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/JUNGLE.png?raw=true',
  mid: 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/MIDDLE.png?raw=true',
  adc: 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/ADC.png?raw=true',
  sup: 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/SUPPORT.png?raw=true',
};

export function GuideCard({ description, image, lane, title }: Props) {
  return (
    <div className="max-w-2xl mx-auto gap-2 flex w-full p-2 bg-gradient-to-r from-cyan-900 to-sky-900 rounded-md">
      <img src={image} alt="" className="w-20 h-20" />

      <div>
        <h2 className="font-semibold text-lg leading-none uppercase">
          <img src={roles[lane]} alt="" className="w-5 h-5 mr-1 inline-block" />
          {title}
        </h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}
