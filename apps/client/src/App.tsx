import { useEffect, useState } from 'react'
import nestLogo from './assets/nest.svg'
import reactLogo from './assets/react.svg'

function App() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting)
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://nestjs.com" target="_blank">
          <img src={nestLogo} className="logo" alt="Nest logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nest + React</h1>
      <div className="text-lg">{greeting}</div>
    </div>
  )
}

export default App
