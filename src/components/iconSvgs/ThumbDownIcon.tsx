import React from 'react';
type Props = {
  isActive: boolean;
  strokeColor?: string;
};

const ThumbDownIcon = React.memo(({ strokeColor, isActive }: Props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={isActive ? '#F26524' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57738 7.14542L7.4294 11.9784C7.00214 11.9784 6.59238 11.8086 6.29026 11.5065C5.98814 11.2044 5.81841 10.7946 5.81841 10.3674V8.21941H2.77902C2.62334 8.22117 2.46914 8.18906 2.3271 8.12532C2.18506 8.06157 2.05858 7.9677 1.95642 7.85021C1.85426 7.73273 1.77887 7.59444 1.73546 7.44493C1.69205 7.29541 1.68167 7.13824 1.70503 6.98432L2.44609 2.15137C2.48492 1.89527 2.61501 1.66184 2.81237 1.49408C3.00973 1.32632 3.26107 1.23555 3.52007 1.23848H9.57738M9.57738 7.14542V1.23848M9.57738 7.14542H11.0112C11.3151 7.15079 11.6104 7.04439 11.841 6.84641C12.0717 6.64843 12.2216 6.37265 12.2623 6.07143V2.31246C12.2216 2.01124 12.0717 1.73547 11.841 1.53748C11.6104 1.3395 11.3151 1.2331 11.0112 1.23848H9.57738"
        stroke={isActive ? '#F26524' : strokeColor ?? '#ACACBE'}
        strokeWidth="1.07399"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ThumbDownIcon;
