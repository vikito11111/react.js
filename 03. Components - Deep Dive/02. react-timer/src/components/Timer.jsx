import { useState, useEffect } from "react";

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();

        return currentSeconds;
    });

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(prevTime => prevTime + 1);
                setIsManual(false);
            }, 1000);
        }
    }, [time, isManual]);

    function addTenSeconds() {
        setIsManual(true);
        setTime(prevTime => prevTime + 10);
    }

    return (
        <>
            <h1>Timer</h1>
            <div>{time}</div>
            <button onClick={addTenSeconds}>Add 10 seconds</button>
        </>
    );
}