import React, {useState} from 'react'
import Count from './Count'
import IsFive from './IsFive'

// React.memo используется только для компоненты и затрагивает только изменения пропсов.
// Если функциональный компонент обёрнут в React.memo и использует useState, useReducer
// или useContext, он будет повторно рендериться при изменении состояния или контекста.
export const MemoAndUseMemoExample = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div className="App">
      <h5>Счетчик 1: </h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>

      <h5>Счетчик 2: </h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  )
}
