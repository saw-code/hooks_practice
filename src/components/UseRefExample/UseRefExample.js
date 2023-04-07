import React, {useEffect, useRef, useState} from 'react';
import './useRef.css';

// сохраняет в переменной timerRef состояние которое не изменяется до нажатия кнопки Стоп
// Если бы мы определили например переменную let timer вместо useRef и потом использовали ее внутри функции
// то при каждом рендеринге страницы эта переменная была бы со значением undefined
export const UseRefExample = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  let timerRef = useRef()

  const addNumber = () => {
    setNumbers(prev => [...prev, prev[prev.length - 1] + 1]);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000)
  }

  const stop = () => {
    clearInterval(timerRef.current)
  }

  return (
    <div>
      <ul>
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

// Пример использования useRef для хранения DOM элемента
// export const UseRefExample = () => {
//
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   const ulRef = useRef()
//
//   console.log(ulRef)
//
//   const addNumber = () => {
//     const lastNumber = numbers[numbers.length - 1]
//     setNumbers([...numbers, lastNumber + 1]);
//   };
//
//   const handleScroll = () => {
//     console.log('Был скролл!')
//   }
//
//   useEffect(() => {
//     ulRef.current.addEventListener('scroll', handleScroll)
//   }, [])
//
//   const removeScroll = () => {
//     ulRef.current.removeEventListener('scroll', handleScroll)
//   }
//
//   return (
//     <div>
//       <ul ref={ulRef}>
//         {numbers.map((n) => (
//           <li key={n}>{n}</li>
//         ))}
//       </ul>
//       <button onClick={addNumber}>✅ Добавить число</button>
//       <button onClick={removeScroll}>Не следить</button>
//     </div>
//   );
// };
