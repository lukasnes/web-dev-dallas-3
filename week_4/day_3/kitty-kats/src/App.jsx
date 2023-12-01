import './App.css'
import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App