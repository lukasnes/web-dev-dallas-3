import './Home.css'
import cats from '../../../kitty.json'
import KittyLink from '../../components/KittyLink/KittyLink.jsx'

const Home = () => {
    let catLinks = cats.map(cat => <KittyLink cat={cat}/>)

    return (
        <main id="home">
            {catLinks}
        </main>
    )
}

export default Home