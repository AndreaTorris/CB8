import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import NameSearch from "../components/NameSearch";

export default function PokemonDetailPage() {
  const router = useRouter();

  const [SinglePokemon, setSinglePokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data));
  }, [router.query.id]);

  console.log(SinglePokemon);

  return (
    <div>
      <header className={styles.HomepageNavbar}>
        <h1>Benvenuto sul Pokedex!</h1>
        <NameSearch />
      </header>
      <div className={styles.SinglePokemonPage}>
        <div className={styles.SinglePokemonCard}>
          <div className={styles.title}>
            <h1>{SinglePokemon?.name?.toUpperCase()}</h1>
            <h3>Nr:{SinglePokemon.id}</h3>
          </div>
          <img
            className={styles.image}
            src={SinglePokemon?.sprites?.other?.dream_world?.front_default}
            alt="PokemonImage"
          />
          <div className={styles.types}>
            <h3>Types: </h3>
            {SinglePokemon?.types?.map((type, i) => (
              <p key={i} className={styles.subtext}>
                {type.type.name}
              </p>
            ))}
          </div>
          <div>
            <p>Weight: {SinglePokemon.weight}</p>
            <p>Height: {SinglePokemon.height}</p>
          </div>

          <ul>
            <li>
              <h3>Stats</h3>
            </li>
            {SinglePokemon?.stats?.map((stat, i) => (
              <li className={styles.stats} key={i}>
                <p>{stat.stat.name}:</p>
                <p>{stat.base_stat}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
