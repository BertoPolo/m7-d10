import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Router } from "react-router-dom"
import Home from "./components/Home"
import {  useEffect} from "react";
//6d07eb96c68f9d57bc8d4b7a3e1731c8

function App() {

  useEffect({

  },[])

  const citiesRetriver = async (city) => {
    try {
      https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6d07eb96c68f9d57bc8d4b7a3e1731c8

      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=6d07eb96c68f9d57bc8d4b7a3e1731c8`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const wheatherRetriver
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  )
}

export default App
