interface IconProps {
  width: number;
  height: number;
}

export const WarpcastIcon = ({ width, height }: IconProps) => {
  const fillColor = "#432C8D";
  return (
    <div className="size-[200px] rounded-full self-center">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 1260.000000 1260.000000"
        preserveAspectRatio="xMidYMid meet"
        className="group-hover:opacity-100 opacity-50 bg-white group-hover:scale-[1.15] h-full transition-all duration-300 object-cover rounded-full"
      >
        <title>warpcast</title>
        <g
          transform="translate(0.000000,1260.000000) scale(0.100000,-0.100000)"
          fill={fillColor}
          stroke="none"
        >
          <path
            d="M2881 12589 c-1087 -83 -2062 -739 -2549 -1716 -188 -377 -292 -757
          -322 -1178 -8 -116 -10 -1083 -8 -3500 4 -3103 5 -3348 21 -3455 65 -434 179
          -783 368 -1124 143 -260 311 -479 534 -701 250 -249 490 -421 805 -578 269
          -135 485 -210 760 -267 318 -65 75 -61 3870 -58 3263 3 3451 4 3550 21 392 67
          633 143 945 297 441 217 820 532 1115 925 277 370 477 815 565 1260 53 269 50
          64 50 3800 l0 3480 -22 140 c-109 682 -402 1262 -878 1740 -359 361 -754 605
          -1235 765 -262 87 -469 128 -750 150 -161 12 -6659 11 -6819 -1z m1462 -4016
          c8 -27 148 -553 313 -1170 164 -617 301 -1119 303 -1117 2 2 144 527 316 1167
          l311 1162 716 3 716 2 11 -32 c5 -18 146 -541 312 -1163 165 -621 302 -1131
          303 -1132 1 -1 138 512 305 1140 167 628 308 1152 312 1165 l9 22 809 0 c445
          0 812 -3 814 -7 3 -5 -336 -1167 -752 -2583 l-756 -2575 -701 -3 c-554 -2
          -703 1 -711 10 -5 7 -157 540 -338 1183 -180 644 -330 1176 -333 1184 -3 7
          -154 -517 -337 -1166 -182 -649 -334 -1187 -338 -1196 -6 -16 -62 -17 -706
          -17 -390 0 -702 4 -705 9 -7 11 -1516 5138 -1516 5151 0 7 279 10 815 10 l814
          0 14 -47z"
          />
        </g>
      </svg>
    </div>
  );
};
