import { FC, useState, useEffect } from "react";
import CircleProgress from "./CircleProgress";
import HourHandIcon from "./Icons/HourHandIcon";

const Meter: FC = () => {
  // const [status, setStatus] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(0);

  // const clickTest = (): void => {
  //   setStatus(!status);
  // };

  useEffect(() => {
    setSpeed(0);
  }, []);

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
          <div className="[&>span]:transition-all" >
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
            <span className={`text-2xl absolute right-[28%] top-[17%] ${speed > 60 ? "text-[#126AED]" : ""}`}>60</span>
            <span className={`text-2xl absolute right-[18%] bottom-[62%] ${speed > 70 ? "text-[#126AED]" : ""}`}>
              70
            </span>
            <span className={`text-2xl absolute right-[13%] bottom-[48%] ${speed > 80 ? "text-[#126AED]" : ""}`}>
              80
            </span>
            <span className={`text-2xl absolute right-[15%] bottom-[32%] ${speed > 90 ? "text-[#126AED]" : ""}`}>
              90
            </span>
            <span className={`text-2xl absolute right-[22%] bottom-[20%] ${speed >= 100 ? "text-[#126AED]" : ""}`}>
              100
            </span>
          </div>
        </div>
        {/* <div
          className={`rounded-full relative z-10 transition-all duration-500 box-content ${
            status
              ? "w-[350px] h-[350px] border-[#1B70EE1C] border-[0px] "
              : "w-[200px] h-[200px] border-[5px] border-[#126AED]"
          } `}
        >
          {!status ? (
            <>
              <div className="animate-pingSlow w-full h-full border border-[#1295ed] rounded-full absolute z-[2] "></div>
              <div
                className="w-full h-full hover:cursor-pointer rounded-full transition-all text-2xl hover:text-white hover:bg-[#126aed10] grid place-content-center relative z-10"
                onClick={clickTest}
              >
                تست
              </div>
            </>
          ) : (
            
          )} */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Meter;
