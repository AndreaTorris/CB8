import "./index.css";

const Hero = ({ imgUrl, heroTitle, heroText }) => {
  return (
    <div className="hero">
      <img src={imgUrl} alt="hero image" className="hero_image" />
      <div className="heroContainer">
        <h1 className="heroTitle">{heroTitle}</h1>
        <h3 className="heroText">{heroText}</h3>
      </div>
    </div>
  );
};

export default Hero;
