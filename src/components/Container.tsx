import { ReactNode, FC } from "react";
import MeterIcon from "./Icons/MeterIcon";

interface IProps {
  children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return (
    <main className="w-full min-h-[100vh] relative overflow-x-hidden">
      {children}
      <div className="w-[80%] h-[80%] absolute bottom-0 left-[-15%] ">
        <MeterIcon className="w-full h-full" />
      </div>
    </main>
  );
};

export default Container;
