import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">up to 20% discount</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id
          similique et expedita, ad, maxime non sequi voluptatem numquam hic
          sapiente necessitatibus possimus itaque. Tempore, quam expedita.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
