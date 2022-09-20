export function Filters() {
  return (
    <nav className="flex gap-4 items-center flex-wrap py-2 mx-auto">
      <div className="flex gap-2 w-full max-w-sm items-center">
        <span className="leading-none font-semibold text-gray-300">
          Champion
        </span>
        <div className="flex-1 bg-slate-800 rounded-md border border-slate-600 focus-within:outline focus-within:outline-1 focus-within:outline-red-500">
          <input
            className="bg-transparent w-full h-9 pl-2 outline-none placeholder:text-sm"
            placeholder="Name"
          />
        </div>
      </div>

      <ul className="flex justify-center items-center gap-4">
        <span className="leading-none font-semibold text-gray-300">Roles:</span>
        <li>
          <img
            src="https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/TOP.png?raw=true"
            alt=""
            className="w-7 h-7"
          />
        </li>
        <li>
          <img
            src="https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/JUNGLE.png?raw=true"
            alt=""
            className="w-7 h-7"
          />
        </li>
        <li>
          <img
            src="https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/MIDDLE.png?raw=true"
            alt=""
            className="w-7 h-7"
          />
        </li>
        <li>
          <img
            src="https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/ADC.png?raw=true"
            alt=""
            className="w-7 h-7"
          />
        </li>

        <li>
          <img
            src="https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/SUPPORT.png?raw=true"
            alt=""
            className="w-7 h-7"
          />
        </li>
      </ul>
    </nav>
  );
}
