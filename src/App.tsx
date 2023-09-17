import { useEffect, useState } from "react";
import { Balloon } from "./components/Balloon";
import { Footer } from "./components/Footer";
import list from "./config/unadvices-list.json";

function App() {
  const [unadvice, setUnadvice] = useState("");

  const getUnadvice = () => {
    const random = Math.floor(Math.random() * list.payload.length);
    const foundAdvice = list.payload.find((_, index) => index === random);
    if (foundAdvice) setUnadvice(foundAdvice);
  };

  useEffect(() => {
    getUnadvice();
  }, []);

  return (
    <div className="app">
      <Balloon unadvice={unadvice} getUnadvice={getUnadvice} />
      <Footer unadvice={unadvice} />
    </div>
  );
}

export default App;
