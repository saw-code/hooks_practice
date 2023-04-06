import React from 'react';
import './App.css';
import {UseStateExample} from "./components/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample";

function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      <UseEffectExample/>
    </div>
  )
}

export default App;
