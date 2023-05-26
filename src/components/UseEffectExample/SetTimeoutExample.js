import React, {useEffect, useState} from "react";

export const SetTimeoutExample = () => {

  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  console.log("render SetTimeoutExample")

  useEffect(() => {
    setTimeout(() => {
      console.log("setTimeout")
      document.title = counter.toString()
    }, 1000)
  }, [])

  return (
    <div>
      Hello, {counter}
      <button onClick={() => setFake(fake + 1)}>Fake +</button>
      <button onClick={() => setCounter(counter + 1)}>Counter +</button>
    </div>
  );
};