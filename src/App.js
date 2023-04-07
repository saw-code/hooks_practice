import React from 'react';
import './App.css';
// import {UseStateExample} from "./components/UseStateExample/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample/UseEffectExample";
import {MemoAndUseMemoExample} from "./components/MemoAndUseMemoExample/MemoAndUseMemoExample";
import {UseRefExample} from "./components/UseRefExample/UseRefExample";

function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      {/*<UseEffectExample/>*/}
      {/*<MemoAndUseMemoExample/>*/}
      <UseRefExample/>
    </div>
  )
}

export default App;
