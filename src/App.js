import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Router } from "react-router-dom"
import Home from "./components/Home"
import { useEffect, useState } from "react"
//6d07eb96c68f9d57bc8d4b7a3e1731c8

//https://api.openweathermap.org/data/2.5/weather?q=$%7Bquery%7D&appid=6d07eb96c68f9d57bc8d4b7a3e1731c8

function App() {
  // useEffect({}, [])
  const [cityInput, setCityInput] = useState("")
  const [city, setCity] = useState([])

  const wheatherRetriver = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=6d07eb96c68f9d57bc8d4b7a3e1731c8`)
      const data = await response.json()
      console.log(data)
      setCity(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <input type="text" onChange={(e) => setCityInput(e.target.value)} />
        {cityInput && <button onClick={wheatherRetriver}>enter</button>}

        <p>{city.name}</p>
        <p>{city.weather[0].description}</p>
      </header>
    </div>
  )
}

export default App
