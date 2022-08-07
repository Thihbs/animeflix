import Logo from '../../assets/imagens/animeflix.png';
import { ButtonLink } from '../buttonLink';
import './menu.css';

 export const Menu = (props) => {
    return(
        <nav className='Menu'>
            <a href='/'>
            <img className='Logo' src={Logo} alt="Imagem do logo"/>
            </a>
            <ButtonLink as="a" className="ButtonLink" href='/'> Novo Video</ButtonLink>
         </nav>
    )
}