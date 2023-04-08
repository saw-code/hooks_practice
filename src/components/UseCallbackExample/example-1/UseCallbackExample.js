import React, {useCallback, useRef, useState} from 'react';
import './useCallback.css';

// Если мы вызываем start а затем stop то ссылка стирается и мы не видим надпись "Был скролл" в логах.
// а если нажимаем start а затем addNumber то наша компонента перерендится и на handleScroll уже будет
// новая ссылка и по этому при нажатии на stop будет затираться старая ссылка, но новая будет все равно
// и в логах мы увидем надпись "Был скролл"
// Что бы решить эту проблему с очищением скролла на какую бы кнопку не нажали, используем хук UseCallback
export const UseCallbackExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const ulRef = useRef()
  const numbersRef = useRef()

  numbersRef.current = numbers

  const addNumber = () => {
    setNumbers(prev => [...prev, prev[prev.length - 1] + 1]);
  };
// при первом рендере благодаря useCallback сохраняется ссылка на эту функцию и каждый раз будет ее возвращать
// и в start и в stop функциях
  const handleScroll = useCallback(() => {
    console.log('Был скролл!', numbersRef.current )
  }, [])

  const start = () => {
    ulRef.current.addEventListener('scroll', handleScroll)
  }

  const stop = () => {
    ulRef.current.removeEventListener('scroll', handleScroll)
  }

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={start}>▶️ Старт</button>
      <button onClick={stop}>⏹ Стоп</button>
    </div>
  );
};