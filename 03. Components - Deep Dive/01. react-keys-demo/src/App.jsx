import { useState } from 'react';

import './App.css'

function App() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'Lord of the Rings',
        'The Case of Christ'
    ]);
    
    function buttonClickHandler() {
        setMovies((oldMovies) => {
            const newMovies = [...oldMovies];
    
            newMovies[2] = 'Harry Potter';
            newMovies.push('Star Wars');
    
            return newMovies;
        });
    }

    return (
        <>
            <h1>Movies:</h1>

            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={buttonClickHandler}>Change</button>
        </>
    )
}

export default App