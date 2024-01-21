import styles from "./index.module.scss";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import MainText from "../../components/mainText";
import Footer from "../../components/footer";
export default function CopyrightnRules() {
  return (
    <div className={styles.CopyrightnRules}>
      <Navbar />
      <Hero />
      <MainText />
      <Footer />
    </div>
  );
}
