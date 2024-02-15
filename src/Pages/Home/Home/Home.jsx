import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommeds/ChefRecommends";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testomonial from "../Testomonial/Testomonial";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      {/* chef recommends section */}
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testomonial></Testomonial>

    </div>
  );
};

export default Home;