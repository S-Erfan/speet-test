import { FC } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

const App: FC = () => {
  return (
    <>
      <Container>
        <Title text="تست سرعت اینترنت" />
        <NavBar />
      </Container>
    </>
  );
};

export default App;
