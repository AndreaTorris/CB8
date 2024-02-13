import { useState, useEffect } from "react";

const getRandomPokemon = () => {
  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    const min = 1; // Puoi modificare il valore minimo
    const max = 1302; // Puoi modificare il valore massimo
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  }, null);

  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, []);
  return (
    <img
      src={pokemonData?.sprites?.other?.showdown?.front_default}
      alt="PokemonImage"
    />
  );
};

export default getRandomPokemon;
