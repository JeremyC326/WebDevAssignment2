import { useState } from 'react'
import './App.css'

function App() {
  const colors = ['#f94144', '#f3722c', '#f8961e', '#90be6d', '#577590'];
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="flexbox-container" style={{backgroundColor: colors[index]}}>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  )
}

export default App
