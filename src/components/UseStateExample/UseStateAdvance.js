import React, {useMemo, useState} from 'react';

function generateData() {
  console.log("generateData")
  return 1
}


const UseStateAdvance = () => {
  console.log("UseState func render")
  // useMemo позволяет нам не вызывать каждый рендер ф-цию generateData
  // const initValue = useMemo(generateData, [])

  const [counter, setCounter] = useState(generateData)

  // если передаем вызов ф-ции при передаче в setCounter то generateData тоже один раз всего рендерится вначале
  return (
    <div>
      <button onClick={() => setCounter((state) => state + 1)}>+</button>
      {counter}
    </div>
  );
};

export default UseStateAdvance;