import styles from "@/styles/Home.module.scss";
import NameSearch from "../../src/pages/components/NameSearch";
import PokemonCard from "../../src/pages/components/PokemonCard";

export default function Home() {
  return (
    <>
      <body className={styles.Body}>
        <header className={styles.HomepageNavbar}>
          <h1>Benvenuto sul Pokedex!</h1>
          <NameSearch />
        </header>
        <div>
          <PokemonCard />
        </div>
      </body>
    </>
  );
}
