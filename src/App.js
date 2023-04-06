import React from 'react';
import './App.css';
import {UseStateExample} from "./components/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample";
import {MemoAndUseMemoExample} from "./components/MemoAndUseMemoExample";

function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      {/*<UseEffectExample/>*/}
      <MemoAndUseMemoExample/>
    </div>
  )
}

export default App;
