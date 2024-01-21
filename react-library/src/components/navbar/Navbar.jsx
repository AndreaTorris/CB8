import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img
        src="https://www.svgrepo.com/show/414856/book-education-library-4.svg"
        className={styles.Image}
        alt="image"
      />
      <h1>Segui le Regole!</h1>
      <ul className={styles.Ulist}>
        <li className={styles.UlItem}>lorem</li>
        <li className={styles.UlItem}>ipsum</li>
        <li className={styles.UlItem}>sid</li>
        <li className={styles.UlItem}>dolor</li>
      </ul>
    </div>
  );
};

export default Navbar;
