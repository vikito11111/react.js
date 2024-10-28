import { useEffect, useState, useRef } from "react";


export default function RefDemo() {
    const [counter, setCounter] = useState(0);
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            console.log('Initial render');
            initialRender.current = false;
        } else {
            console.log('Update only');
        }
    }, [counter]);

    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
            <button onClick={() => initialRender.current = true}>Reset</button>
        </div>
    );
}