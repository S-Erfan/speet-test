import { FC } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Meter from "./components/Meter";

const App: FC = () => {
  return (
    <>
      <Container>
        <Title text="تست سرعت اینترنت" />
        <NavBar />
        <Meter />
      </Container>
    </>
  );
};

export default App;
