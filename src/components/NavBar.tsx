import { FC, ReactNode } from "react";
import PingIcon from "./Icons/PingIcon";
import UploadIcon from "./Icons/UploadIcon";
import DownloadIcon from "./Icons/DownloadIcon";

interface IOptions {
  name: string;
  value: null | number;
  icon: ReactNode;
  suffix: string;
}

const NavBar: FC = () => {
  const options: IOptions[] = [
    {
      name: "پینگ",
      value: null,
      icon: <PingIcon className="w-[32px] h-[32px]" />,
      suffix: "Ms",
    },
    {
      name: "سرعت آپلود",
      value: null,
      icon: <UploadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
    {
      name: "سرعت دانلود",
      value: null,
      icon: <DownloadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
  ];

  return (
    <>
      <section className="container mt-[50px]">
        <div className="w-8/12 mx-auto border border-[rgba(0,0,0,0.1)] rounded-[30px] shadow-md shadow-[#0000001c]">
          <div className="w-full h-auto flex justify-between items-center py-5 px-10 ">
            {options.map((item, index) => (
              <div className={`flex justify-center items-center flex-col gap-2 ${index === 1 ? "border-x border-[rgba(0,0,0,0.1)] px-[10%]" : ""}`}>
                <h4 className="opacity-[0.3]">{item.name}</h4>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[28px]">
                    {item.suffix} {item.value ?? "--"}
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
