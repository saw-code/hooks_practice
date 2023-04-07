import React from 'react';

// если бы мы не обернули в React.memo то наша компонента Buttons каждый раз ререндорилсь не смотря на то, что
// в родительской компоненте мы обернули наши функции в useCallback. Но если бы мы не обернули фу-ции
// в useCallback то Buttons так же ререндорилась бы. В итоге React.memo смотрит в пропсах изменились ли ссылки
// на ф-ции onPlus и onMinus, видит что ссылки не изменились (они записались при первом рендере благодаря
// useCallback и больше не изменяются), а т.к. ссылки не изменились то и пропсы не изменились и по этому
// ререндер компоненты Buttons не происходит!
export const Buttons = React.memo(({ onPlus, onMinus }) => {
  console.log('Buttons render');

  return (
    <div>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  )
})