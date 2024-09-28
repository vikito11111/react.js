import { useState } from "react";

export default function BaseCounter() {
    const [count, setCount] = useState(0);

    function incrementButtonClickHandler() {
        setCount(count + 1);
    }

    function resetCounterClickHandler() {
        setCount(0);
    }

    function decrementButtonClickHandler() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>

            <button onClick={incrementButtonClickHandler}>+</button>
            <button onClick={resetCounterClickHandler}>Reset</button>
            <button onClick={decrementButtonClickHandler}>-</button>
        </>
    );
}