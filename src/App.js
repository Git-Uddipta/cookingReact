import React from 'react'
import { useState } from 'react'
import CounterHooks from './counterHooks'
import Counter from './counter'
export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter inCnt={0} />
      Counter Hooks
      <CounterHooks inCnt={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'red' ? 'blue' : 'red'
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App
