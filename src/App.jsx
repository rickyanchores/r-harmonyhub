import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Sections/Home/Home'
import Card from './Components/Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>r-harmonyhub</h1>
      <p>powered by Spotify</p>
      <Home />
      <Card />
    </div>
  )
}

export default App
