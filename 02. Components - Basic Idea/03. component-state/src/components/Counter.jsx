import { useState } from "react"; 

export default function Counter() {
    const [count, setCount] = useState(0); //beginning/default value

    //let count = stateArr[0];   //Read only
    //let setCount = stateArr[1];

    setTimeout(() => {
        setCount(count + 1);    // oldState => oldState + 1   Protects from racing cognition
    }, 1000);
    
    return (
        <div>
            <h2>Counter</h2>

            <p>{count}</p>
        </div>
    );
}