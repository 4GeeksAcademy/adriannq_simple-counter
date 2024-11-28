import { useState } from "react";

import { Container, Button, Badge } from "react-bootstrap";

function Counter() {
  const [seconds, secondsCounter] = useState(0);
  return (
    <>
      <Container>
        <h1>Seconds Counter</h1>
        {String(seconds)
          .split("")
          .map((secondsCounter) => {
            return (
              <>
                <h2 className="d-inline-flex">
                  <Badge className="bg-secondary">{secondsCounter}</Badge>
                </h2>
              </>
            );
          })}
      </Container>
      <Container>
        <Button onClick={() => secondsCounter(seconds + 1)}>+1</Button>
        <Button className="m-1" onClick={() => secondsCounter(seconds - 1)}>
          -1
        </Button>
      </Container>
    </>
  );
}

export default Counter;
