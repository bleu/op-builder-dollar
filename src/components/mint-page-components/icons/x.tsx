import { useThemeStore } from "@/store/use-theme-store";

interface IconProps {
  width: number;
  height: number;
}

export const XIcon = ({ width, height }: IconProps) => {
  const { theme } = useThemeStore();

  const fillColor = theme === "light" ? "#00000" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 120 120"
      width={width || "100%"}
      height={height || "100%"}
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      className="group-hover:opacity-100 opacity-50 group-hover:scale-[1.15] transition-all duration-300 self-center"
    >
      <title>X</title>
      <path
        d="M94.505 5.765000000000001h18.400000000000002l-40.199999999999996 45.949999999999996L120 114.23h-37.03l-29 -37.92 -33.19 37.92H2.37l43 -49.15L0 5.77h37.97l26.215000000000003 34.660000000000004ZM88.05 103.22h10.195L32.43 16.200000000000003H21.490000000000002Z"
        fill={fillColor}
        strokeWidth="5"
      />
    </svg>
  );
};
