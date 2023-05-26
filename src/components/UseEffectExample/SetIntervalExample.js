import React, {useEffect, useState} from "react";

export const SetIntervalExample = () => {

  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  console.log("render SetIntervalExample")

  useEffect(() => {

    setInterval(() => {
      console.log(`tick: ${counter}`)
      setCounter(state => state + 1 )
    }, 1000)

  }, [])

  return (
    <div>
      Hello, counter: {counter} - fake: {fake}
      {/*<button onClick={() => setFake(fake + 1)}>Fake +</button>*/}
      {/*<button onClick={() => setCounter(counter + 1)}>Counter +</button>*/}
    </div>
  );
};