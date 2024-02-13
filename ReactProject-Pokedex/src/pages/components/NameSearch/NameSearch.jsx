import styles from "./index.module.scss";
import React, { useState } from "react";

const NameSearch = () => {
  const [PokemonName, setPokemonName] = useState("");

  const gestisciCambioInput = (e) => {
    setPokemonName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    window.open(`/pokedex/${PokemonName}`, "_blank");
  };

  return (
    <div>
      <form className={styles.nameSearch} onSubmit={handleSubmit}>
        <label>
          Cerca un pokemon:
          <input
            type="text"
            value={PokemonName}
            onChange={gestisciCambioInput}
          />
        </label>

        <button type="submit" className={styles.button}>
          cerca
        </button>
      </form>
    </div>
  );
};

export default NameSearch;

// `/pokedex/${PokemonName}`
