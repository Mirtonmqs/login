import React, { useState } from 'react';
import '../styles/Site.css';
import front from '../img/front.jpg';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Site = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="site-container">
      {/* Renderiza o Sidebar */}
      <Sidebar isOpen={sidebarVisible} toggle={toggleSidebar} />

      {/* Renderiza o Header dentro do DefaultLayout */}
      <Header toggleSidebar={toggleSidebar} />

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
        <h2>O que você irá aprender para ser um Desenvolvedor Front End</h2>
        <a className="frontImg" href="#">
          <img src={front} alt="Front End" />
        </a>
        <br />
        <h3>HTML</h3>
        <p>
          HTML (HyperText Markup Language) é a linguagem padrão utilizada para
          criar a estrutura e o conteúdo de páginas web. É composto por uma
          série de elementos que definem diferentes partes de uma página, como
          títulos, parágrafos, imagens, links, formulários e muito mais.
        </p>
        <p>
          Os navegadores da web interpretam o código HTML para renderizar e
          exibir o conteúdo de uma página web para os usuários. É fundamental
          para qualquer desenvolvedor Front End entender HTML em profundidade.
        </p>

        <h3>CSS</h3>
        <p>
          CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para
          controlar a aparência e o layout dos elementos HTML em uma página web.
          Com CSS, você pode definir cores, fontes, espaçamento, alinhamento,
          margens, bordas e outros atributos visuais.
        </p>
        <p>
          Além disso, o CSS é crucial para criar designs responsivos que se
          adaptam a diferentes tamanhos de tela e dispositivos.
        </p>

        <h3>JavaScript</h3>
        <p>
          JavaScript é uma linguagem de programação utilizada para adicionar
          interatividade e dinamismo às páginas web. Com JavaScript, você pode
          manipular elementos HTML, responder a eventos do usuário, realizar
          requisições HTTP, criar animações e validar formulários.
        </p>
        <p>
          Além de ser fundamental para desenvolvimento Front End, o JavaScript
          também é usado em diversas outras aplicações, incluindo Single Page
          Applications (SPAs) e Progressive Web Apps (PWAs).
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Site;
