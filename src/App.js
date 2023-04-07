import React from 'react';
import './App.css';
// import {UseStateExample} from "./components/UseStateExample/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample/UseEffectExample";
import {MemoAndUseMemoExample} from "./components/MemoAndUseMemoExample/MemoAndUseMemoExample";
import {UseRefExample} from "./components/UseRefExample/UseRefExample";
import {UseCallbackExample} from "./components/UseCallbackExample/UseCallbackExample";

function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      {/*<UseEffectExample/>*/}
      {/*<MemoAndUseMemoExample/>*/}
      {/*<UseRefExample/>*/}
      <UseCallbackExample/>
    </div>
  )
}

export default App;
