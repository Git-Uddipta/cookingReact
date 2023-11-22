import React, { useState,useContext } from 'react'
import { ThemeContext } from './App'
export default function CounterHooks({ inCnt }) {
  
  const [count, setCount] = useState(inCnt)
  const style=useContext(ThemeContext)
  return (
    <div>
      <button style={style} onClick={() => setCount(prevCnt => prevCnt - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCnt => prevCnt + 1)}>+</button>
    </div>
  )

}
