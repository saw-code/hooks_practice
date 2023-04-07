import React, {useMemo} from 'react'

let renderCount = 0

export default React.memo(function IsFive({value}) {
  console.warn(`🔴 isFive render: ${++renderCount}`)

  // функция getResult с хуком useMemo выполняется только при изменении value, что предотвращает
  // вызов этой функции при каждом рендеринге родительской компоненты
  const getResult = useMemo(() => {
    let i = 0
    while (i < 800000000) i++
    return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :('
  }, [value])

  return (
    <h3>{getResult}</h3>
  )

}, (prevProps, nextProps) => {
  return nextProps.value !== 5 //когда вернется false тогда и произойдет ререндер
})
// Как говорили ранее React.memo делает поверхностное сравнение пропсов, еще это называется
// Shallow Equal идет сравнение старых пропсов (prevProps) и новых пропсов(newProps)
// и если они не изменились то компонент не будет делать ререндер иначе сделает ререндер.
// Напишем эту функцию вторым параметром, где укажем, что только если value стало 5 то только
// тогда сделай ререндер и соответственно функция getResult отрендерится только 2 раза,
// первый при загрузке страницы и второй когда value станет равно 5