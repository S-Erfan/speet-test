import { FC, useState, useEffect } from "react";
import CircleProgress from "./CircleProgress";
import HourHandIcon from "./Icons/HourHandIcon";
import DownloadIcon from "./Icons/DownloadIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setterValues } from "../redux/speedSlice";
import UploadIcon from "./Icons/UploadIcon";

const Meter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatus] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(0);
  const [completed, setCompleted] = useState<string>("");

  function generateRandomNumberWithDecimal() {
    const startTime = Date.now();
    const endTime = startTime + 30000; // 30 seconds

    return new Promise(() => {
      const interval = setInterval(() => {
        if (Date.now() >= endTime) {
          clearInterval(interval);
          if (completed === "") {
            setCompleted("download");
          } else {
            setCompleted("upload");
          }
        } else {
          const randomNumber = Math.random() * 10 + 70;
          const speedNum: number = parseFloat(randomNumber.toFixed(2));
          setSpeed(speedNum);
        }
      }, 700);
    });
  }

  async function main() {
    await generateRandomNumberWithDecimal();
  }

  const clickTest = (): void => {
    if (status === true) {
      return;
    }
    setStatus(true);
    main();
  };

  useEffect(() => {
    if (completed === "download") {
      dispatch(setterValues({ name: "download", value: speed }));
      setSpeed(0);
      setTimeout(() => {
        main();
      }, 1000);
    } else if (completed === "upload") {
      dispatch(setterValues({ name: "upload", value: speed }));
      dispatch(setterValues({ name: "ping", value: 150 }));
      dispatch(setterValues({ name: "completed", value: true }));
    }
  }, [completed]);

  return (
    <>
      <section className="container flex justify-center items-center mt-10 pb-5">
        <div className="w-fit h-fit relative">
          <CircleProgress
            sqSize={350}
            strokeWidth={30}
            percentage={75}
            percentageRage={speed}
          />
          <div className="w-fit h-fit absolute bottom-[30%] left-[50%] translate-x-[-50%] ">
            <div className="w-fit h-fit relative">
              <HourHandIcon
                style={{
                  rotate: `${
                    speed === 0
                      ? "0deg"
                      : speed === 100
                      ? "288deg"
                      : speed * 1.9 + speed + "deg"
                  }`,
                }}
                className={
                  "!h-[100px] !w-[100px] duration-700 origin-[59%_30%] transition-all"
                }
              />
            </div>
          </div>
          <div className="[&>span]:transition-all">
            <span
              className={`text-2xl absolute left-[22%] bottom-[20%] ${
                speed > 0 ? "text-[#126AED]" : ""
              }`}
            >
              0
            </span>
            <span
              className={`text-2xl absolute left-[12%] bottom-[35%] ${
                speed > 10 ? "text-[#126AED]" : ""
              }`}
            >
              10
            </span>
            <span
              className={`text-2xl absolute left-[12%] bottom-[52%] ${
                speed > 20 ? "text-[#126AED]" : ""
              }`}
            >
              20
            </span>
            <span
              className={`text-2xl absolute left-[20%] bottom-[67%] ${
                speed > 30 ? "text-[#126AED]" : ""
              }`}
            >
              30
            </span>
            <span
              className={`text-2xl absolute left-[33%] top-[15%] ${
                speed > 40 ? "text-[#126AED]" : ""
              }`}
            >
              40
            </span>
            <span
              className={`text-2xl absolute left-[53%] top-[13%] translate-x-[-50%] ${
                speed > 50 ? "text-[#126AED]" : ""
              }`}
            >
              50
            </span>
            <span
              className={`text-2xl absolute right-[28%] top-[17%] ${
                speed > 60 ? "text-[#126AED]" : ""
              }`}
            >
              60
            </span>
            <span
              className={`text-2xl absolute right-[18%] bottom-[62%] ${
                speed > 70 ? "text-[#126AED]" : ""
              }`}
            >
              70
            </span>
            <span
              className={`text-2xl absolute right-[13%] bottom-[48%] ${
                speed > 80 ? "text-[#126AED]" : ""
              }`}
            >
              80
            </span>
            <span
              className={`text-2xl absolute right-[15%] bottom-[32%] ${
                speed > 90 ? "text-[#126AED]" : ""
              }`}
            >
              90
            </span>
            <span
              className={`text-2xl absolute right-[22%] bottom-[20%] ${
                speed >= 100 ? "text-[#126AED]" : ""
              }`}
            >
              100
            </span>
          </div>
          <div className="w-fit absolute bottom-[10%] right-[50%] translate-x-[50%] grid place-content-center ">
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="text-4xl">{speed === 0 ? "--" : speed}</span>
              <div className="flex justify-center items-center gap-2">
                <span className="text-xl">Mbps</span>
                {completed === "download" ? (
                  <UploadIcon className="w-[25px] h-[25px] " />
                ) : (
                  <DownloadIcon className="w-[25px] h-[25px] " />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-fit mx-auto mb-5 relative z-10">
        <button
          onClick={clickTest}
          className={`bg-[#126AED] transition-all rounded-[30px] text-white text-xl py-5 px-10 hover:cursor-pointer hover:bg-[#126aedc2] ${
            status ? "!cursor-default opacity-50 " : ""
          } `}
        >
          شروع تست
        </button>
      </div>
    </>
  );
};

export default Meter;
