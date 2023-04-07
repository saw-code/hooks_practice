import React, {useState} from 'react';
import {List} from "../../List";

export const UseEffectExample = () => {
  const [visibleList, setVisibleList] = useState(true)

  const toggleVisibleList = () => {
    setVisibleList((visible) => !visible)
  }

  return (
    <div className="App">
      {visibleList && <List/>}
      <button onClick={toggleVisibleList}>Показать / Скрыть</button>
    </div>
  )
};

// useEffect - хук который выполняется либо один раз если вторым параметром (зависимость)
// передадим [], либо каждый раз при изменении компоненты если вторым параметром ничего
// не передадим, либо каждый раз при изменении переменной которую указали вторым
// параметром
