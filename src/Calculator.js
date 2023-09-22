import { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const back = () => {
    setValue(value.slice(0, -1));
  };

  return (
      <>
      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="C" onClick={reset} />
              <input type="button" value="Del" onClick={back} />
              <input type="button" value="." onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div className="bottom">
              <input type="button" value="0" className="" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="=" className="wide" onClick={(e) => setValue(eval(value) + "")}/>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
