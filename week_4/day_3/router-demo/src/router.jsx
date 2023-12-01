import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import axios from 'axios'
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import User from './Pages/User.jsx';
import Pokemon from './Pages/Pokemon.jsx';
import data from './data.json'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route 
                path="/user/:id" 
                element={<User />}
                loader={({params}) => {
                    console.log(data[params.id])
                    return data[params.id]
                }}  
            />
            <Route 
                path="/pokemon/:pokemon"
                element={<Pokemon />}
                loader={async ({params}) => {
                    console.log(params)
                    let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
                    console.log(data)
                    let { name, sprites: {front_default} } = data
                    return { name, img: front_default }
                }}
            />
        </Route>
    )
)

export default router