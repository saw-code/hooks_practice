import React, {useEffect, useState} from "react";

export const ResetEffectExample = () => {

  const [counter, setCounter] = useState(1)

  console.log("ResetEffectExample rendered " + counter)

  // внутри ф-ция сработает когда компонент умирает, либо при повторном вызове useEffect
  // и в этом случае сначала сработает RESET EFFECT (ф-ция зачистки) а потом Effect occured
  useEffect(() => {
    console.log('Effect occurred ' + counter)

    return () => {
      console.log("RESET EFFECT " + counter)
    }
  }, [counter])

  const increase = () => setCounter(counter + 1)

  return (
    <div>
      Hello, counter: {counter}
      <button onClick={increase}>+</button>
    </div>
  );
};