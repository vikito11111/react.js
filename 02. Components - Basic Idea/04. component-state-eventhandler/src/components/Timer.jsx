import { useState } from "react"; 

export default function Timer() {
    const [time, setTime] = useState(0); //beginning/default value

    //let count = stateArr[0];   //Read only
    //let setCount = stateArr[1];

    setTimeout(() => {
        setTime(time + 1);    // oldState => oldState + 1   Protects from racing cognition
    }, 1000);
    
    return (
        <div>
            <h2>Timer</h2>

            <p>{time}</p>
        </div>
    );
}