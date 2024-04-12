import React from 'react';
import './Site.css';
import './Header.css';
import logo from '../img/logoaspec.png';
import front from '../img/front.jpg';
import { DefaultLayout } from '../routes/DefaultLayout';

const Site = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <h2>Olá, Bem-Vindo à Escola de Programação Tec</h2>
        <p>
          Na Escola Tec, estamos comprometidos em capacitar indivíduos
          apaixonados por tecnologia e transformá-los em programadores
          talentosos e preparados para o mercado de trabalho. Localizada em um
          ambiente inspirador no coração da cidade, nossa escola oferece uma
          variedade de programas educacionais projetados para atender às
          necessidades e aspirações de todos os nossos alunos.
        </p>
      </div>

      <div className="container">
        <h2>O que você irá aprender para ser um Desenvolvedor Front End.</h2>
        <a className="frontImg" href="#">
          <img src={front} alt="Front End" />
        </a>
        <br />
        <h3>HTML</h3>
        <p>
          O HTML é a linguagem padrão usada para criar a estrutura e o conteúdo
          de páginas web. Ele fornece uma estrutura básica que define os
          diferentes elementos e componentes que compõem uma página web, como
          texto, imagens, links, formulários e muito mais. Os navegadores da web
          interpretam o código HTML para renderizar e exibir o conteúdo de uma
          página web para os usuários.
        </p>
        <h3>CSS</h3>
        <p>
          O CSS é uma linguagem de estilo utilizada para controlar a aparência e
          o layout dos elementos HTML em uma página web. Ele permite definir
          cores, fontes, espaçamento, alinhamento, margens, bordas, animações e
          outros atributos visuais dos elementos HTML. Com o CSS, é possível
          criar designs atraentes e responsivos para diferentes dispositivos.
        </p>
        <h3>JavaScript</h3>
        <p>
          O JavaScript é uma linguagem de programação que adiciona
          interatividade e dinamismo às páginas web. Ele é executado no
          navegador do usuário e permite manipular elementos HTML, responder a
          eventos do usuário, realizar requisições HTTP, criar animações,
          validar formulários, entre outras funcionalidades. O JavaScript também
          é usado no desenvolvimento de aplicativos web mais complexos,
          incluindo Single Page Applications (SPAs) e Progressive Web Apps
          (PWAs).
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Site;
