import { useEffect, useState } from "react";

export default function Starwars() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>StarWars Characters</h3>
      <ul>{characters.map(character => <li key={character.url}>{character.name}</li> )}</ul>
    </>
  );
}
