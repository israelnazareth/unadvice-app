import Separator from "../../assets/separator.svg";
import Dice from "../../assets/dice.svg";
import list from "../../config/unadvices-list.json";
import "./Balloon.css";

interface BallonProps {
  unadvice: string;
  getUnadvice: () => void;
}

export function Balloon({ unadvice, getUnadvice }: BallonProps) {
  return (
    <div className="main-container">
      <div className="balloon-container">
        <span className="advice-number">
          (DES)CONSELHO #{list.payload.indexOf(unadvice) + 1}
        </span>
        <p className="advice-text">“{unadvice}”</p>
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
