import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Sections/Home/Home'
import Card from './Components/Card/Card'
import TopFive from './Components/Api/TopFive'
import Footer from './Sections/Footer/Footer'
import Genre from './Components/Genre/Genre'
import Artist from './Components/Artist/Artist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>r-harmonyhub</h1>
      <p>powered by Spotify</p>
      <Home />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

      <Genre />
      <Artist />
      <TopFive />
      <Footer />
    </div>
  )
}

export default App
