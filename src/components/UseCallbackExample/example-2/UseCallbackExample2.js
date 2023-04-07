import React, {useCallback, useMemo, useState} from 'react';
import './useCallbackCSS.css';
import {Buttons} from "./Button";


export const UseCallbackExample2 = () => {
  const [count, setCounter] = useState(0);
  // ссылки не меняются потому что useCallback сохраняет ссылки при первом рендере, но useCallback
  // не предотвращает лишние ререндеры компоненты Button
  const onPlus = useCallback(() => setCounter((count) => count + 1), [])

  const onMinus = useCallback(() => setCounter((count) => count - 1), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
};
