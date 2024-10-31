import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from "./components/Home"
import Prices from "./components/Prices"
import About from './components/About'

function App() {

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/prices" element={<Prices />} />
            </Routes>
        </div>
    )
}

export default App