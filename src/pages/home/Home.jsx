import Blogs from "../Blogs";
import TrendingProducts from "../shop/TrendingProducts";
import Banner from "./Banner";
import Categories from "./Categories";
import DealSection from "./DealSection";
import HeroSection from "./HeroSection";
import PromoBanner from "./PromoBanner";

const home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <DealSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default home;
