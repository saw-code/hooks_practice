import React, {useEffect, useState} from "react";

export const KeysTrackerExample = () => {

  const [text, setText] = useState('')

  console.log("KeysTrackerExample rendered with text: " + text)

  // state - такая запись с колбэком гарантирует что в state будет актуальное значение из text
  useEffect(() => {
    const handler = (e) => {
      console.log(e.key)
      setText((state) => state + e.key)
    }

    window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [])

  return (
    <div>
      Typed text: {text}
    </div>
  );
};