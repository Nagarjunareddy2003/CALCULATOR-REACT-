import Keypad from "./Keypad";
import { useState } from "react";
import "./App.css";

function App() {
  let [input, setin] = useState("");

  function handlekey(value) {
    setin(input + value);
  }
  function calculate(){
    let output=eval(input)
    setin(output)

  }
  function clear(){
    setin("")

  }

  return (
    <div className="container">
      <h1>Calculator App using React</h1>
      <div className="calculater">
        <input type="text" className="output" value={input}  />

        <Keypad handlekey={handlekey} cal={calculate} clear={clear}/>
      </div>
    </div>
  );
}

export default App;
