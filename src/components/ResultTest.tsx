import { FC, ReactNode } from "react";
import PingIcon from "./Icons/PingIcon";
import UploadIcon from "./Icons/UploadIcon";
import DownloadIcon from "./Icons/DownloadIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { reset } from "../redux/speedSlice";
interface IOptions {
  name: string;
  value: null | number;
  icon: ReactNode;
  suffix: string;
}

interface IProps {
  ping: number | null;
  upload: number | null;
  download: number | null;
}

const ResultTest: FC<IProps> = ({ ping, upload, download }) => {
  const dispatch = useDispatch<AppDispatch>();

  const options: IOptions[] = [
    {
      name: "پینگ",
      value: ping,
      icon: <PingIcon className="w-[32px] h-[32px]" />,
      suffix: "Ms",
    },
    {
      name: "سرعت آپلود",
      value: upload,
      icon: <UploadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
    {
      name: "سرعت دانلود",
      value: download,
      icon: <DownloadIcon className="w-[32px] h-[32px]" />,
      suffix: "Mbps",
    },
  ];

  const resetSpeed = () => {
    dispatch(reset());
  };

  return (
    <>
      <section className="mt-8 container">
        <div className="w-full sm:w-fit py-8 px-10 mx-auto border border-[##0000001A] rounded-[30px] shadow-md shadow-[#0000001c] flex flex-col-reverse justify-between items-center gap-4">
          {options.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center flex-col gap-2 ${
                index === 1
                  ? "border-y py-4 border-[rgba(0,0,0,0.1)] px-[10%]"
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
        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <button
            onClick={resetSpeed}
            className={`bg-[#126AED] transition-all rounded-[10px] text-white text-xl py-3 px-[80px] hover:cursor-pointer hover:bg-[#126aedc2] `}
          >
            تست مجدد
          </button>
          <button
            className={`bg-[#DB7F12] transition-all rounded-[10px] text-white text-xl py-3 px-[20px] hover:cursor-pointer hover:bg-[#DB7F12c2] `}
          >
            اشتراک‌گذاری
          </button>
        </div>
      </section>
    </>
  );
};

export default ResultTest;
