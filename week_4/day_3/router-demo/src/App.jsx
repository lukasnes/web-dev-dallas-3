import { Link, Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import './App.css'

const App = () => {
    const [input,setInput] = useState('')
    const navigate = useNavigate()
    const getPokemon = (e) => {
        navigate(`/pokemon/${input}`)
        setInput('')
    }

    return (
        <>
            <header>
                <h1>
                    Router Browser Browser Router
                </h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/user/1">User 1</Link>
                    <Link to="/user/2">User 2</Link>
                </nav>
            </header>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={getPokemon}>Submit</button>
            <Outlet />
        </>
    )
}

export default App