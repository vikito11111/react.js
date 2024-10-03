import { useState, useEffect } from "react";

export default function Effect() {
    const [count, setCount] = useState(0);
    const [decaCount, setDecaCount] = useState(0);

    useEffect(() => {
        console.log('Initial Render / Component Mount');
    }, []);

    useEffect(() => {
        console.log('Update Counter');
    }, [count]);

    useEffect(() => {
        console.log('Update Deca');
    }, [decaCount]);

    useEffect(() => {
        // Clean-up Function (First the fucntion is called and then the component is unmounted)
        return () => {
            console.log('Component Unmount');
        }
    }, []);

    function onClick () {
        setCount(prevCount => prevCount + 1);

        if (count % 10 === 0 && count !== 0) {
            setDecaCount(prevDeca => prevDeca + 1);
        }
    }

    return (
        <>
            <h2>Effect</h2>
            <div>{count}</div>
            <button onClick={onClick}>+</button>
        </>
    );
};