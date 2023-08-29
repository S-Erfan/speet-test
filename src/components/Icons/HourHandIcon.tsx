import { FC } from "react";

interface IPropsIconComponent {
  style: any;
  className: string;
}

const HourHandIcon: FC<IPropsIconComponent> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      viewBox="0 0 115 131"
      fill="none"
    >
      <path
        d="M22.7027 128.553L113.739 25.1676C115.602 23.0521 115.348 19.8159 113.18 18.0158L93.1171 1.36479C90.9298 -0.450562 87.6712 -0.0796937 85.9477 2.1807L1.96598 112.329C0.290025 114.527 0.715632 117.668 2.91611 119.34L15.9242 129.23C18.0115 130.816 20.97 130.521 22.7027 128.553Z"
        fill="url(#paint0_linear_1_62)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_62"
          x1="7.75801"
          y1="127.398"
          x2="102.315"
          y2="12.5494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#126AED" />
          <stop offset="1" stopColor="#84B3FA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HourHandIcon;
