import React, {useEffect, useState} from "react";

export const MyClock = () => {

    let date = new Date()

    const [hours, setHours] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(date.getSeconds())

    if (seconds === 60) {
      setSeconds(0)
      setMinutes(minutes + 1)
    }

    if (minutes === 60) {
      setMinutes(0)
      setHours(hours + 1)
    }

    if (hours === 24) {
      setHours(0)
    }


    useEffect(() => {

      setInterval(() => {
        setSeconds(state => state + 1)
      }, 1000)

    }, [])

    return (
      <div>
        hours: {hours}, minutes: {minutes}, seconds: {seconds}
      </div>
    );
  }
;