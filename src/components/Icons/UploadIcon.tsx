import { FC } from "react";
import { IPropsIconComponent } from "../../viewModal/types/PropsIconCm";

const UploadIcon: FC<IPropsIconComponent> = ({
  className,
  color = "#126AED",
  opacity = "0.5",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 16C0 23.5424 0 27.3136 2.3424 29.6576C4.688 32 8.4576 32 16 32C23.5424 32 27.3136 32 29.656 29.6576C32 27.312 32 23.5424 32 16C32 8.4576 32 4.6864 29.656 2.344C27.3152 0 23.5424 0 16 0C8.4576 0 4.6864 0 2.3424 2.344C0 4.6848 0 8.4576 0 16ZM16 25.2C16.3183 25.2 16.6235 25.0736 16.8485 24.8485C17.0736 24.6235 17.2 24.3183 17.2 24V15.696L19.952 18.448C20.0619 18.5659 20.1943 18.6605 20.3415 18.726C20.4887 18.7916 20.6476 18.8269 20.8088 18.8297C20.9699 18.8326 21.1299 18.8029 21.2794 18.7426C21.4288 18.6822 21.5645 18.5924 21.6785 18.4785C21.7924 18.3645 21.8822 18.2288 21.9426 18.0794C22.003 17.9299 22.0326 17.7699 22.0297 17.6088C22.0269 17.4476 21.9916 17.2887 21.9261 17.1415C21.8605 16.9943 21.7659 16.8619 21.648 16.752L16.848 11.952C16.623 11.7273 16.318 11.6011 16 11.6011C15.682 11.6011 15.377 11.7273 15.152 11.952L10.352 16.752C10.2341 16.8619 10.1395 16.9943 10.074 17.1415C10.0084 17.2887 9.9731 17.4476 9.97025 17.6088C9.96741 17.7699 9.99705 17.9299 10.0574 18.0794C10.1178 18.2288 10.2076 18.3645 10.3215 18.4785C10.4355 18.5924 10.5712 18.6822 10.7206 18.7426C10.8701 18.8029 11.0301 18.8326 11.1912 18.8297C11.3524 18.8269 11.5113 18.7916 11.6585 18.726C11.8057 18.6605 11.9381 18.5659 12.048 18.448L14.8 15.696V24C14.8 24.3183 14.9264 24.6235 15.1515 24.8485C15.3765 25.0736 15.6817 25.2 16 25.2ZM9.6 9.2C9.28174 9.2 8.97652 9.07357 8.75147 8.84853C8.52643 8.62349 8.4 8.31826 8.4 8C8.4 7.68174 8.52643 7.37651 8.75147 7.15147C8.97652 6.92643 9.28174 6.8 9.6 6.8H22.4C22.7183 6.8 23.0235 6.92643 23.2485 7.15147C23.4736 7.37651 23.6 7.68174 23.6 8C23.6 8.31826 23.4736 8.62349 23.2485 8.84853C23.0235 9.07357 22.7183 9.2 22.4 9.2H9.6Z"
        fill={color}
      />
    </svg>
  );
};

export default UploadIcon;
