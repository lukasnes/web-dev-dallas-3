import './RedButton.css'

const RedButton = ({ message, alertMessage }) => {
    const handleClick = (evt) => {
        evt.preventDefault()
        console.log(evt.target)
        alert(alertMessage)
    }

    return (
        <button onClick={handleClick}>
            {message}
        </button>
    )
}

export default RedButton