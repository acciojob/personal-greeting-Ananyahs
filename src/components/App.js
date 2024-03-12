
import React from "react";
import './../styles/App.css';

const App = () => {

  const[text,setText]= useState("");

  function whatText(e){
    setText(Hello ${e.target.value}!);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name:</h1>
        <input type="text" onChange={whatText}></input>
        <p>{text}</p>
    </div>
  )
}

export default App
