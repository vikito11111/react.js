import { useEffect, useState } from "react";


const baseURL = 'https://swapi.dev/api/';

export default function CharacterList() {
    console.log('render');

    const[characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseURL}/people`);
            const result = await response.json();

            console.log(result.results);

            setCharacters(result.results);
        }

        fetchCharacters();
    }, []);


    return (
        <>
            <h2>Characters</h2>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}