import { FC, ReactNode } from "react";
import PingIcon from "./Icons/PingIcon";
import UploadIcon from "./Icons/UploadIcon";
import DownloadIcon from "./Icons/DownloadIcon";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { ISpeedReduce } from "../viewModal/ISpeedReduce";

interface IOptions {
  name: string;
  value: null | number;
  icon: ReactNode;
  suffix: string;
}

const NavBar: FC = () => {
  const speedInfo: ISpeedReduce = useSelector<RootState>(
    (state) => state.speed
  );

  const options: IOptions[] = [
    {
      name: "پینگ",
      value: speedInfo.ping,
      icon: <PingIcon className="w-[32px] h-[32px]" />,
      suffix: "Ms",
    },
    {
      name: "سرعت آپلود",
      value: speedInfo.upload,
      icon: <UploadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
    {
      name: "سرعت دانلود",
      value: speedInfo.download,
      icon: <DownloadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
  ];

  return (
    <>
      <section className="container mt-[50px]">
        <div className="lg:w-8/12 w-full mx-auto border border-[rgba(0,0,0,0.1)] rounded-[30px] shadow-md shadow-[#0000001c]">
          <div className="w-full h-auto flex-col md:flex-row flex justify-between items-center py-5 px-10 gap-2 ">
            {options.map((item, index) => (
              <div
                key={index}
                className={`flex justify-center items-center flex-col gap-2 ${
                  index === 1
                    ? "border-y md:border-y-0 md:border-x border-[rgba(0,0,0,0.1)] py-[15px] md:py-0 md:px-[10%] "
                    : ""
                }`}
              >
                <h4 className="opacity-[0.3]">{item.name}</h4>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[28px] flex justify-center items-center flex-row-reverse">
                    <span>{item.value ?? "--"}</span>
                    <span>{item.suffix}</span>
                  </span>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
