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
    <div className="w-full h-screen flex justify-center items-center text-center">
      <div className="">
        <div className="flex items-center gap-4">
          <a href="https://nestjs.com" target="_blank">
            <img src={nestLogo} className="w-[100px]" alt="Nest logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="w-[100px]" alt="React logo" />
          </a>
        </div>
        <div className="text-3xl font-bold">Nest + React</div>
        <div className="text-lg">{greeting}</div>
      </div>
    </div>
  )
}

export default App
