import { Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Kat from './pages/Kat/Kat.jsx'
import cats from '../kitty.json'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>} />
            <Route 
                path="/kitty/:id"
                element={<Kat />}
                loader={({params}) => {
                    let kitty = cats.find((cat) => cat.kittenId === +params.id)
                    return kitty
                }}
            />
        </Route>
    )
)

export default router