import { useState } from "react";
import { Container } from "react-bootstrap";

import CounterPage from "./pages/counterPage";
import LandingPage from "./pages/landingPage";
import NavBar from "./components/navbar";

function App() {
  const [status, setStatus] = useState("Home");

  let pages = {
    Home: <LandingPage />,
    Counter: <CounterPage />,
  };

  return (
    <>
      <NavBar status={status} statusSetter={setStatus} />
      <Container>{pages[status]}</Container>
    </>
  );
}

export default App;
