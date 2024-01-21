import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.SectionText}>
        <h1>Chi Siamo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          repudiandae est iusto nemo in cupiditate dolorem reiciendis. Facilis
          sit harum itaque laborum, molestias rerum architecto similique!
          Aperiam, ratione natus cumque perspiciatis laudantium doloremque
          quidem fugit velit, officiis facere accusamus temporibus nostrum
          facilis harum. Aut ratione soluta voluptatibus accusantium. Illo
          officiis, unde debitis deserunt tempora quam natus perferendis maxime
          inventore ratione ad praesentium alias rem voluptatem repellendus
          distinctio odit nesciunt magnam iure beatae est sapiente aliquid.
          Soluta beatae id cupiditate tempora maiores exercitationem vitae rem
          sunt expedita quisquam enim dolores architecto quibusdam nisi, eaque
          odit modi earum laborum ea sequi itaque.
        </p>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2020/05/15/13/28/reading-5173530_1280.jpg"
        className={styles.Image}
        alt="image"
      />
    </div>
  );
};

export default Hero;
