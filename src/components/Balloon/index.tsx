import "./Balloon.css";
import Separator from "../../assets/separator.svg";
import Dice from "../../assets/dice.svg";

export function Balloon() {
  return (
    <div className="main-container">
      <div className="balloon-container">
        <span className="advice-number">(DES)CONSELHO # 117</span>
        <p className="advice-text">
          “It is easy to sit up and take notice, what’s difficult is getting up
          and taking action.”
        </p>
        <div className="separator-container">
          <div className="separator" />
          <img src={Separator} alt="separator" />
          <div className="separator" />
        </div>
        <button type="button" className="dice-button">
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}
