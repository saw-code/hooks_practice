import React, {useCallback, useState} from 'react';
import './useCallbackCSS.css';
import {Buttons} from "./Button";


export const UseCallbackExample2 = () => {
  const [count, setCounter] = useState(0);
  // ссылки не меняются потому что useCallback сохраняет ссылки при первом рендере, но useCallback
  // не предотвращает лишние ререндеры компоненты Button.
  // Отличие useMemo от useCallback в том, что useMemo мемоизирует то, что возвращает ф-ия,
  // а useCallback мемоизирует саму функцию. В нашем случае зависимости мы не указываем по этому
  // мемоизирует только один раз при первом рендеринге. Если бы мы указали зависимость, например
  // count, то у нас бы рендерилалсь компонента Buttons потому что функция мемоизировалась
  // каждый раз когда в ней изменялся бы параметр count, соответственно постоянно обновлялись
  // бы пропсы
  const onPlus = useCallback(() => setCounter((count) => count + 1), [])

  const onMinus = useCallback(() => setCounter((count) => count - 1), [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
};
