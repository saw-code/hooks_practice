import React, {useEffect, useState} from 'react';

const UseEffectAdvance = () => {

  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  console.log("render this component")

  useEffect(() => {
    console.log("useEffect every render")
    document.title = counter.toString()
  })

  useEffect(() => {
    console.log("useEffect only first render (same the componentDidMount)")
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log("useEffect first render and every render when change counter")
    document.title = counter.toString()
  }, [counter])

  // useEffect срабатывает ТОЛЬКО после того как разметка уже отобразилась на странице
  return (
    <div>
      Hello, {counter}
      <button onClick={() => setFake(fake + 1)}>Fake +</button>
      <button onClick={() => setCounter(counter + 1)}>Counter +</button>
    </div>
  );
};

export default UseEffectAdvance;