import { Menu } from './../../componentes/Menu/index';
import Footer from './../../componentes/Footer/index';
import Main from './../../componentes/Main/index';



function PageDefault(props) {
    return(
        <section>
          <Menu/>
             <Main>
                 {props.children}
             </Main>
          <Footer/>
       </section>
    );
}


export default PageDefault;