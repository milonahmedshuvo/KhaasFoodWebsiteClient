import Blog from "../../HomeComponents/Blog/Blog";
import ClientReview from "../../HomeComponents/ClientReview/ClientReview";
import ContackUs from "../../HomeComponents/ContackUs/ContackUs";
import Fish from "../../HomeComponents/Fish/Fish";
import Fruitspage from "../../HomeComponents/FruitsPage/Fruitspage";
import Honey from "../../HomeComponents/Honey/Honey";
import MEAT from "../../HomeComponents/MEAT/MEAT";
import OurService from "../../HomeComponents/OurService/OurService";
import OurShop from "../../HomeComponents/OurShop/OurShop";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Fruitspage></Fruitspage>
      <Fish></Fish>
      <Honey></Honey>
      <MEAT></MEAT>
      <Blog></Blog>
      <ClientReview></ClientReview>
      <ContackUs></ContackUs>
      <OurService></OurService>
      <OurShop></OurShop>
    </div>
  );
};

export default Home;
