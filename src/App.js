import React from 'react';
import './App.css';
// import {UseStateExample} from "./components/UseStateExample/UseStateExample";
import {UseEffectExample} from "./components/UseEffectExample/UseEffectExample";
import {MemoAndUseMemoExample} from "./components/MemoAndUseMemoExample/MemoAndUseMemoExample";
import {UseRefExample} from "./components/UseRefExample/UseRefExample";
import {UseCallbackExample} from "./components/UseCallbackExample/example-1/UseCallbackExample";
import {UseCallbackExample2} from "./components/UseCallbackExample/example-2/UseCallbackExample2";
import UseStateAdvance from "./components/UseStateExample/UseStateAdvance";
import UseEffectAdvance from "./components/UseEffectExample/UseEffectAdvance";
import {SetTimeoutExample} from "./components/UseEffectExample/SetTimeoutExample";
import {SetIntervalExample} from "./components/UseEffectExample/SetIntervalExample";
import {MyClock} from "./components/UseEffectExample/MyClock";
import {Test1} from "./components/liveCycle/Test1";
import {Test2} from "./components/liveCycle/Test2";
import {Clock} from "./components/UseEffectExample/Clock";
import {ResetEffectExample} from "./components/UseEffectExample/ResetEffectExample";
import {KeysTrackerExample} from "./components/UseEffectExample/KeysTrackerExample";


function App() {

  return (
    <div className="App">
      {/*<UseStateExample/>*/}
      {/*<UseEffectExample/>*/}
      {/*<MemoAndUseMemoExample/>*/}
      {/*<UseRefExample/>*/}
      {/*<UseCallbackExample/>*/}
      {/*<UseCallbackExample2/>*/}
      {/*<UseStateAdvance/>*/}
      {/*<UseEffectAdvance/>*/}
      {/*<SetTimeoutExample/>*/}
      {/*<SetIntervalExample/>*/}
      {/*<Clock mode={'analog'}/>*/}
      {/*<Clock mode={'digital'}/>*/}
      {/*<Test1 arg={77}/>*/}
      {/*<Test2 arg={77}/>*/}
      {/*<ResetEffectExample/>*/}
      <KeysTrackerExample/>
    </div>
  )
}

export default App;
