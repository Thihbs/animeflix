import React from 'react';
import { FooterBase, FooterImg } from './styles';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <FooterImg  src="https://avatars.githubusercontent.com/Thihbs" alt="Avatar Bento" />
      </a>
      <p>
        Desenvolvido por Bento na 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;