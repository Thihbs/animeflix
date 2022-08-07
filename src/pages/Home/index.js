import { Menu } from "../../componentes/Menu";
import BannerMain from "../../componentes/BannerMain"
import dadosIniciais from "../../data/dados_iniciais.json"
import Carousel from "../../componentes/Carousel";
import Footer from "../../componentes/Footer";


function Home() {
  return (
    <div className="wrapper">   
      <Menu/>
      <BannerMain 
       videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
       url={dadosIniciais.categorias[0].videos[0].url}
       videoDescription={`Só os melhores animes, Demon slayer, Atack on titans, Boku no Hero e muito mais.`}
      />
     <Carousel
       ignoreFirstVideo
       category={dadosIniciais.categorias[0]}
     />
     <Carousel
       category={dadosIniciais.categorias[1]}
     />
     <Carousel
       category={dadosIniciais.categorias[2]}
     />
     <Carousel
       category={dadosIniciais.categorias[3]}
     />
     <Footer/>
    </div>
  );
}

export default Home;
