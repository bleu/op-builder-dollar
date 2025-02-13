const LogoComponent = ({
  fill,
  width = 36,
  height = 36,
}: { fill?: string; width?: number; height?: number }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill={fill}
  >
    <g filter="url(#a)">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M18 1c2.805 0 5.442.722 7.734 1.99l-2.682 2.682A12.356 12.356 0 0 0 18 4.6C11.152 4.6 5.6 10.152 5.6 17c0 1.8.383 3.509 1.072 5.052L3.99 24.734A15.928 15.928 0 0 1 2 17C2 8.163 9.163 1 18 1Zm0 5.994c1.121 0 2.2.184 3.206.525l-3.077 3.076a6.406 6.406 0 0 0-6.534 6.534L8.52 20.206A9.994 9.994 0 0 1 7.994 17c0-5.526 4.48-10.006 10.006-10.006Zm6.146 2.11L21.57 11.68a6.44 6.44 0 0 1 1.868 1.932l2.588-2.588a10.065 10.065 0 0 0-1.88-1.92Zm3.409 4.917-3.151 3.15a6.406 6.406 0 0 1-6.232 6.233l-3.151 3.151c.94.293 1.941.451 2.979.451 5.526 0 10.006-4.48 10.006-10.006 0-1.038-.158-2.038-.451-2.98ZM13.157 28.419A12.36 12.36 0 0 0 18 29.4c6.848 0 12.4-5.552 12.4-12.4 0-1.718-.35-3.355-.981-4.843l2.697-2.697A15.93 15.93 0 0 1 34 17c0 8.837-7.163 16-16 16a15.93 15.93 0 0 1-7.54-1.884l2.697-2.697Zm-1.133-3.393 2.588-2.588a6.44 6.44 0 0 1-1.932-1.868l-2.576 2.576c.552.71 1.199 1.342 1.92 1.88Zm-1.707 1.707-2.56 2.56a16.09 16.09 0 0 1-1.912-1.888L8.4 24.849a12.47 12.47 0 0 0 1.917 1.884ZM30.293 6.758l-2.56 2.559A12.47 12.47 0 0 0 25.85 7.4l2.556-2.555a16.09 16.09 0 0 1 1.887 1.913Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={35.2}
        height={35.2}
        x={0.4}
        y={0.04}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.64} />
        <feGaussianBlur stdDeviation={0.8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_793_328" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_793_328"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default LogoComponent;
