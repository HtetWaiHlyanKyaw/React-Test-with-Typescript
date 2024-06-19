// import React from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["New York", "London", "Paris", "Tokyo"];
  let gays = ["Aung Aung", "Maung Maung", "Hla Hla", "Win Win"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectedItem}
        />
      </div>

      <div>
        <ListGroup
          items={gays}
          heading="Gays"
          onSelectedItem={handleSelectedItem}
        />
      </div>

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
