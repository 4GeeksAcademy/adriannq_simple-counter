import { Button } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <div className="bg-secondary-subtle p-5 mt-3">
      <h1>A Warm Welcome!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        debitis, maiores cumque tempora quidem deleniti. Eum accusamus incidunt
        doloremque dolore, nemo reiciendis dolores aliquam voluptatem debitis
        atque ex ipsam pariatur?
      </p>
      <p>
        <Button variant="primary">Call to action!</Button>
      </p>
    </div>
  );
};

export default Jumbotron;
