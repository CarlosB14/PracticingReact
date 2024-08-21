import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0)

  const handleClickCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="contador">
      <button onClick={handleClickCount} className="contador-button">
        Contador
      </button>
      <p>
        {count}
      </p>
    </div>
  )
}
