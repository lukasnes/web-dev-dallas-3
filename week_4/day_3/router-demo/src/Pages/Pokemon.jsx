import { useLoaderData } from "react-router-dom"

const Pokemon = () => {
    let { name,img } = useLoaderData()

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    )
}

export default Pokemon