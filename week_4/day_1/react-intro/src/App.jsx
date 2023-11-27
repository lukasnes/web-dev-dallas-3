import RedButton from './Components/RedButton/RedButton.jsx'
import './App.css'
import { useState } from 'react'

const App = () => {
    // const messageArr = [
    //     {
    //         message: "Click me",
    //         alertMessage: "Thank you"
    //     },
    //     {
    //         message: "I am a button",
    //         alertMessage: "Cute as one too"
    //     },
    //     {
    //         message: "Don't click me",
    //         alertMessage: "I told you not to"
    //     },
    //     {
    //         message: "<-- That guy is mean",
    //         alertMessage: "I'm not though"
    //     }
    // ]

    // let messageButtons = messageArr.map(({message,alertMessage}) => <RedButton 
    //     message={message}
    //     alertMessage={alertMessage}
    // />)
    // console.log(messageButtons)

    const [count,setCount] = useState(0)
    return (
        <div className="counter-app">
            {/* {messageButtons} */}
            <button onClick={(evt) => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={(evt) => setCount(count + 1)}>+</button>
        </div>
    )
}

export default App