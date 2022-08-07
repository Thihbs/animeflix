import { Menu } from './../../componentes/Menu/index';
import Footer from './../../componentes/Footer/index';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 35%;
  padding-left: 5%;
  padding-right: 5%;
`

function PageDefault({children}) {
    return(
        <section>
          <Menu/>
             <Main>
                {children}
             </Main>
          <Footer/>
       </section>
    );
}


export default PageDefault;