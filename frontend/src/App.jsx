import { useState } from "react"
import "./App.css"

//React Router Dom
import { Route, Routes } from "react-router-dom"

// Components
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center w-[95%] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
