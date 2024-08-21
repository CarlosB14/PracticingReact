import { useState } from "react"
import { Count } from "./components/Count"

function App() {

  const [text, setText] = useState('Primer Texto')


  return (
   <>
    <header>
      <h1>02 - Múltiples Estados y Comunicación entre Componentes</h1>
    </header>
    <main>
      <Count />
    </main>
   </>
  )
}

export default App
