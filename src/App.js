import React, { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <h1>美金台幣轉換器</h1>
      <h2>{inputValue}</h2>
      <h3>美金</h3>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        onClick={() => {
          const NewInputValue = inputValue * 28.53
          setInputValue(NewInputValue)
        }}
      >
        轉換成台幣
      </button>
      <h3>台幣</h3>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const TWInputValue = inputValue / 28.53
          setInputValue(TWInputValue)
        }}
      >
        轉換成美金
      </button>
    </>
  )
}

export default App
