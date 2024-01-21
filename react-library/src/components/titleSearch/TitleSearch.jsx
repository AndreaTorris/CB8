import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import React, { useState } from "react";

const TitleSearch = () => {
  const [titoloLibro, setitoloLibro] = useState("");

  const gestisciCambioInput = (e) => {
    setitoloLibro(e.target.value);
  };

  return (
    <div>
      <form className={styles.TitleSearch}>
        <label>
          Cerca un libro tramite il suo titolo:
          <input
            type="text"
            value={titoloLibro}
            onChange={gestisciCambioInput}
          />
        </label>
        <Link to={`/book/${titoloLibro}`}>
          <button>cerca</button>
        </Link>
      </form>
    </div>
  );
};

export default TitleSearch;
