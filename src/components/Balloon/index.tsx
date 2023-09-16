import { useEffect, useState } from "react";
import Separator from "../../assets/separator.svg";
import Dice from "../../assets/dice.svg";
import list from "../../config/unadvices-list.json";
import "./Balloon.css";

export function Balloon() {
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
    <div className="main-container">
      <div className="balloon-container">
        <span className="advice-number">
          (DES)CONSELHO #{list.payload.indexOf(unadvice!)}
        </span>
        <p className="advice-text">{unadvice}</p>
        <div className="separator-container">
          <div className="separator" />
          <img src={Separator} alt="separator" />
          <div className="separator" />
        </div>
        <button type="button" className="dice-button" onClick={getUnadvice}>
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}
