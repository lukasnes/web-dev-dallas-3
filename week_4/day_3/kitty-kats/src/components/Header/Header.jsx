import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img src="../../../public/img/kitty.jpg" alt="Kitty Cat" />
            <h1>Welcome to Kitty Haven!</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}

export default Header