import './index.css'
import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
    <header className="header">
      <h1>Ejercicio 01 - Crear un contador con React</h1>
    </header>
    <main>
      <div className='contador'>
        <button className='contador' onClick={handleClick}>
          Contador
        </button>
        <p>{counter}</p>
      </div>
    </main>
    </>
  )
}

export default App
