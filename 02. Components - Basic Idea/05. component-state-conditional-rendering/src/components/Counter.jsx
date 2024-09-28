import { useState } from "react";

import KillCounter from "./KillCounter";
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementButtonClickHandler() {
        setCount(count + 1);
    }

    function resetCounterClickHandler() {
        setCount(0);
    }

    function decrementButtonClickHandler() {
        setCount(count - 1);
    }

    let countText = `Positive: ${count}`;

    if (count < 0) {
        countText = `Negavite: ${count}`;
    }

    return (
        <>
            <h2>Kill Counter:</h2>

            <KillCounter count={count} />

            <h2>Counter:</h2>

            <p
                className={count < 0 ? 'negative-text' : 'positive-text'}
            >
                {countText}
            </p>

            {count < 10 && <button onClick={incrementButtonClickHandler}>+</button>}
            <button onClick={resetCounterClickHandler}>Reset</button>
            {count > -5 && <button onClick={decrementButtonClickHandler}>-</button>}

        </>
    );
}