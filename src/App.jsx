import logo from "./logo.svg";
import "./App.css";
import "./blog.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [on, setOn] = useState(false);
  const textRef = useRef();

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.backgroundColor = "transparent";
    }
  }, [on]);

  useEffect(() => {
    changeColor();
  }, [text])
  

  function changeColor() {
    const randomColor = getRandomColor();
    if (textRef.current) {
      textRef.current.style.color = randomColor;
      if (on) textRef.current.style.backgroundColor = randomColor;
    }
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    // <div className="App">
    //   <div class="shadowContainer">
    //     <div class="redShadow" id="shadow"></div>
    //     <div class="greenShadow" id="shadow"></div>
    //     <div class="yellowShadow" id="shadow"></div>
    //     <div class="blueShadow" id="shadow"></div>
    //   </div>
    //   <div class="ballscontainer">
    //     <div class="balls" id="red"></div>
    //     <div class="balls" id="green"></div>
    //     <div class="balls" id="yellow"></div>
    //     <div class="balls" id="blue"></div>
    //   </div>
    //   <div className="doorUp">

    //   </div>
    //   <div className="doorDown"></div>
    // </div>
    <div className="box">
      <button onClick={() => setOn((pre) => !pre)}>On/off</button>
        <p className="result">
          {text.split("").map((item) => (
            <span ref={textRef} className="item" key={item}>
              {item}
            </span>
          ))}
        </p>
      <input
        onChange={handleChange}
        className="text"
        value={text}
        type="text"
      />
    </div>
  );
}

export default App;
