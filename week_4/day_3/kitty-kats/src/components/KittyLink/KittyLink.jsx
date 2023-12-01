import './KittyLink.css'
import { Link } from 'react-router-dom'

const KittyLink = ({ cat }) => {
    console.log(cat)
    return (
        <Link 
            style={{
                background: `url(${cat.imgURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '300px 300px'
            }}
            className="kitty-link"
            to={`/kitty/${cat.kittenId}`}
        >
            <p>{cat.name}</p>
        </Link>
    )
}

export default KittyLink