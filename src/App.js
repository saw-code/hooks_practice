import React from 'react';
import './App.css';
// import {UseStateExample} from "./components/UseStateExample/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample/UseEffectExample";
import {MemoAndUseMemoExample} from "./components/MemoAndUseMemoExample/MemoAndUseMemoExample";
import {UseRefExample} from "./components/UseRefExample/UseRefExample";
import {UseCallbackExample} from "./components/UseCallbackExample/example-1/UseCallbackExample";
import {UseCallbackExample2} from "./components/UseCallbackExample/example-2/UseCallbackExample2";

function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      {/*<UseEffectExample/>*/}
      {/*<MemoAndUseMemoExample/>*/}
      {/*<UseRefExample/>*/}
      <UseCallbackExample/>
      {/*<UseCallbackExample2/>*/}
    </div>
  )
}

export default App;
