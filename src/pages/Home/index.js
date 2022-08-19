import BannerMain from '../../componentes/BannerMain';
import FetchGet from '../../services/getRequest';
import PageDefault from '../PageDefault/index';
import Carousel from './../../componentes/Carousel/index';






function Home() {

  const dadosIniciais1 = FetchGet();
  return (
    <PageDefault>
      {dadosIniciais1.map((dados, indice) => {
        if (indice == 0) {
          return (
            <BannerMain
              videoTitle={dados.titulo}
              url={dados.link}
              videoDescription={`Só os melhores animes, Demon slayer, Atack on titans, Boku no Hero e muito mais.`}
            />
          )
        }
      })}
      {dadosIniciais1.map((dados,indice) => {
        if (indice != 0) {
          return (
            <Carousel
              titulo={dados.titulo}
              cor={dados.cor}
              url={dados.url}
              link_extra={dados.link_extra}
              videos={dados.videos}
            />
         )   
    }    
})}
     
</PageDefault >
  );
}

export default Home;
