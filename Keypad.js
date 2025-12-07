function Keypad({ handlekey,cal,clear }) {
  return (
    <div className="keypad">
      <div className="row">
        <button onClick={() => handlekey("7")} className="digit">7</button>
        <button onClick={() => handlekey("8")} className="digit">8</button>
        <button onClick={() => handlekey("9")} className="digit">9</button>
        <button onClick={() => handlekey("/")} className="operator">/</button>
      </div>

      <div className="row">
        <button onClick={() => handlekey("4")} className="digit">4</button>
        <button onClick={() => handlekey("5")} className="digit">5</button>
        <button onClick={() => handlekey("6")} className="digit">6</button>
        <button onClick={() => handlekey("*")} className="operator">*</button>
      </div>

      <div className="row">
        <button onClick={() => handlekey("1")} className="digit">1</button>
        <button onClick={() => handlekey("2")} className="digit">2</button>
        <button onClick={() => handlekey("3")} className="digit">3</button>
        <button onClick={() => handlekey("-")} className="operator">-</button>
      </div>

      <div className="row">
        <button onClick={() => handlekey("0")} className="digit">0</button>
        <button  onClick={() => cal()}className="fun-key">=</button>
        <button onClick={() => clear()} className="fun-key">C</button>
        <button onClick={() => handlekey("+")} className="operator">+</button>
      </div>
    </div>
  );
}

export default Keypad;
