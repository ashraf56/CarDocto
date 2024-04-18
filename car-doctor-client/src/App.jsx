import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Service from './page/Authentication/Service'
import Banner from './page/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <p>HOme</p>
  <Banner></Banner>
  <Service></Service>
    </>
  )
}

export default App
