import React, {useState} from 'react';

export const UseStateExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3])

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    setNumbers([...numbers, randNumber])
  }

  return (
    <div className="App">

      <ul>
        {numbers.map((el, index) => <li key={index}>{el}</li>)}
      </ul>

      <button onClick={addNumber}>Новое число</button>
    </div>
  )
};
