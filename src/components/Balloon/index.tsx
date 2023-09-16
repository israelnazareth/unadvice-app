import { useEffect, useState } from "react";
import Separator from "../../assets/separator.svg";
import Dice from "../../assets/dice.svg";
import list from "../../config/unadvices-list.json";
import "./Balloon.css";

interface Advice {
  id: number;
  advice: string;
}

export function Balloon() {
  const [unadvice, setUnadvice] = useState<Advice | undefined>(undefined);

  const randomizeUnadvice = () => {
    const random = Math.floor(Math.random() * list.payload.length);
    const findAdvice = list.payload.find((advice) => advice.id === random);

    setUnadvice(findAdvice);
  };

  useEffect(() => {
    randomizeUnadvice();
  }, []);

  return (
    <div className="main-container">
      <div className="balloon-container">
        <span className="advice-number">(DES)CONSELHO #{unadvice?.id}</span>
        <p className="advice-text">{unadvice?.advice}</p>
        <div className="separator-container">
          <div className="separator" />
          <img src={Separator} alt="separator" />
          <div className="separator" />
        </div>
        <button
          type="button"
          className="dice-button"
          onClick={randomizeUnadvice}
        >
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}
