import { useEffect, useState } from "react";

export const PokemonNames = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // only here to simulate loading
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => response.ok && response.json())
        .then((data) => setPokemonData(data))
        .catch(() => setIsError(true));
    }, 1000);
  }, [setPokemonData]);

  if (isError) {
    return <span>Could not fetch them all 😭</span>;
  }

  if (!pokemonData) {
    return <span>Loading ...</span>;
  }

  return (
    <>
      <p>There are currently {pokemonData.count} different Pokémon</p>
      <ol>
        {pokemonData.results.map(pokemon => <li>{pokemon.name}</li>)}
      </ol>
    </>
  );
};
