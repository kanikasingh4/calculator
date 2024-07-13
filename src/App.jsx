import Display from "./components/Display";
import styles from "./App.module.css";
import Buttonscontainer from "./components/Buttonscontainer";
import { useState } from "react";
function App() {
  let [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.header}>CALCULATOR</div>
      <div className={styles.calculator}>
        <Display displayValue={CalVal}></Display>
        <Buttonscontainer  onButtonClick={onButtonClick}></Buttonscontainer>
      </div>
    </div>
  );
}

export default App;
