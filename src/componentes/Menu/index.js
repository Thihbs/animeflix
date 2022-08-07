import Logo from '../../assets/imagens/animeflix.png';
import Button from '../Button'
import {Link} from 'react-router-dom';
import './menu.css';

 export const Menu = (props) => {
    return(
        <nav className='Menu'>
            <Link to='/'>
            <img className='Logo' src={Logo} alt="Imagem do logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to='/cadastro/video'> Novo Video</Button>
         </nav>
    )
}