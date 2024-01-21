import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img
        src="https://www.svgrepo.com/show/414852/book-education-library-3.svg"
        className={styles.Image}
        alt="image"
      />
      <ul className={styles.Ulist}>
        <li className={styles.UlItem}>lorem</li>
        <li className={styles.UlItem}>ipsum</li>
        <li className={styles.UlItem}>sid</li>
        <li className={styles.UlItem}>dolor</li>
      </ul>
    </div>
  );
};

export default Footer;
