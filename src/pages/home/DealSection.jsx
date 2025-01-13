import dealsImg from "../../assets/deals.png";

const DealSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="imgggg" />
      </div>

      <div className="deals__content">
        <h5>Get up to 20% Discount</h5>
        <h4>Deals of this Month</h4>
        <p>
          our owmens Fashion Deals of the Month are here to make your style
          dreams a reality without breaking the bank Discover a curated of
          expuisite clothing accessorels and footwear all handpicked to elevate
          your wardrobe
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>21</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>59</h4>
            <p>Min</p>
          </div>
          <div className="deals__countdown__card">
            <h4>32</h4>
            <p>sec</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
