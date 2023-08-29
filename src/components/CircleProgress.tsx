import { FC } from "react";

interface IProps {
  sqSize: number;
  strokeWidth: number;
  percentage: number;
  percentageRage: number;
}

const CircleProgress: FC<IProps> = ({ sqSize, strokeWidth, percentage, percentageRage }) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const dashOffsetBar = dashArray - (dashArray *  (percentageRage * 0.75)) / 100

  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      className="rotate-[225deg]"
    >
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <circle
        className="circle-progress circle-progress-tow transition-all duration-700"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffsetBar,
        }}
      />
    </svg>
  );
};

export default CircleProgress;
