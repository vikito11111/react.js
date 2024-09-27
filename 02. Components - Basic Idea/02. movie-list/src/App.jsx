import './App.css'
import MovieList from './components/MovieList'

function App() {
    const moviesList = [
        'The Matrix',
        'Man of Steel',
        'Lord of the Rings',
        'Case for Christ'
    ];

    return (
        <>
            <MovieList movies={moviesList} title="My Movies" />
        </>
    )
}

export default App