import { FC } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Meter from "./components/Meter";
import { ISpeedReduce } from "./viewModal/ISpeedReduce";
import { useSelector } from "react-redux";
import ResultTest from "./components/ResultTest";

export interface IRootState {
  speed: ISpeedReduce;
}

const App: FC = () => {

  const speedInfo = useSelector<IRootState, ISpeedReduce>(
    (state) => state.speed
  );

  return (
    <>
      <Container>
        <Title text="تست سرعت اینترنت" />
        {speedInfo.completed ? (
          <ResultTest
            ping={speedInfo.ping}
            download={speedInfo.download}
            upload={speedInfo.upload}
          />
        ) : (
          <>
            <NavBar />
            <Meter />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
