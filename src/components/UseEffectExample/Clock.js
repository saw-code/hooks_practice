import React, {useEffect, useState} from 'react'
import s from './AnalogClockView.module.css'

const get2digitsString = (number) => {
  return number < 10 ? `0${number}` : number
}

export const Clock = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {

    //  в intervalID находится айдишник интервала и перед демонтированием компонента мы попадем в return
    //  где зачистим за собой setInterval, а иначе он будет продолжать работать, а это утечка памяти
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  let view

  switch (props.mode) {
    case 'analog': {
      view = <AnalogClockView date={date}/>
      break
    }

    default:
      view = <DigitalClockView date={date}/>
  }

  return (
    <div>
      {view}
    </div>
  );
};

export const DigitalClockView = (props) => {
  return <>
    <span>{get2digitsString(props.date.getHours())}</span> : <span>{get2digitsString(props.date.getMinutes())}</span> : <span>{get2digitsString(props.date.getSeconds())}</span>
  </>
}

export const AnalogClockView = (props) => {
  const secondsStyle = {
    transform: `rotate(${props.date.getSeconds() * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${props.date.getMinutes() * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${props.date.getHours() * 30}deg)`
  };

  return <div className={`${s.clock}`}>
    <div className={`${s['analog-clock']}`}>
      <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
      <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
      <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
    </div>
  </div>
}