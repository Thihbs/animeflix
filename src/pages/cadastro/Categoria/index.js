
import { Link } from 'react-router-dom';
import PageDefault from './../../PageDefault/index';




function CadastroCategoria(){
    return (
       <PageDefault>
           <h1>Cadastrar Categoria</h1>
           <Link to="/">
             Ir para home
           </Link>
       </PageDefault>
    )
  }


  export default CadastroCategoria;