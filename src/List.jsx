import React, {useEffect, useState} from 'react';

export const List = () => {
  const [numbers, setNumbers] = useState([1, 2, 3])
  const [count, setCount] = useState(0)

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    setNumbers([...numbers, randNumber])
  }
  // componentDidUpdate (только для count)
  useEffect(() => {
    console.log('COUNT БЫЛ ОБНОВЛЕН!')
  }, [count])

  // componentDidUpdate (только для numbers)
  useEffect(() => {
    console.log('NUMBERS БЫЛ ОБНОВЛЕН!')
  }, [numbers])

  // componentDidUpdate (при любом изменении)
  useEffect(() => {
    console.log('КОМПОНЕНТ ОБНОВИЛСЯ!')
  })

  // componentDidMountUpdate + componentWillUnmount
  useEffect(() => {
    console.log('КОМПОНЕНТ ОТОБРАЗИЛСЯ!')
    return () => {
      console.log('КОМПОНЕНТ БЫЛ УДАЛЕН!')
    }
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {numbers.map((el, index) => <li key={index}>{el}</li>)}
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </>
  );
};


// реализация useEffect в классовой компоненты
// export class List extends React.Component {
//
//   state = {
//     numbers: [1, 2, 3]
//   }
//
//   addRandomNumber = () => {
//     const randNumber = Math.round(Math.random() * 10)
//
//     this.setState({
//       numbers: [...this.state.numbers, randNumber]
//     })
//   }
//
//   componentDidMount() {
//     console.log('КОМПОНЕНТ БЫЛ ОТОБРАЖЕН!')
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log({prevProps, prevState, nextProps: this.props, nextState: this.state})
//   }
//
//   componentWillUnmount() {
//     console.log('КОМПОНЕНТ БЫЛ УДАЛЕН!')
//   }
//
//   render() {
//     return (
//       <>
//         <ul>
//           {this.state.numbers.map((el, index) => <li key={index}>{el}</li>)}
//         </ul>
//         <button onClick={this.addRandomNumber}>Новое число</button>
//       </>
//     );
//   }
// }
