import { useState } from 'react';

import Effect from './components/Effect';
import FancyTimer from './components/FancyTimer';
import Timer from './components/Timer';

import './App.css'

function App() {
    const [showTimer, setShowTimer] = useState(true);

    function changeTimer() {
        setShowTimer(false);
    }

    return (
        <>
            <Timer />

            {showTimer && <FancyTimer />}
            <button onClick={changeTimer}>Turn Off</button>

            <Effect />
        </>
    )
}

export default App