import { useLoaderData } from "react-router-dom"

const User = () => {
    let { name,likes,home } = useLoaderData()

    return (
        <>
            <h1>{name}</h1>
            <ul>Likes:
                <li>{likes[0]}</li>
                <li>{likes[1]}</li>
                <li>{likes[2]}</li>
            </ul>
            <p>Lives in: {home}</p>
        </>
    )
}

export default User