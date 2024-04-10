import React, { useState, useEffect } from 'react';
import './Site.css'; 
import './Header.css'; 
import tecnologia from '../img/tecnologia.png';
import images from '../img/tab.png';
import tec2 from '../img/tec2.jpg';
import logo from '../img/logoaspec.png';
import front from '../img/front.jpg';
import { DefaultLayout } from '../routes/DefaultLayout';


function Site() {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar o índice do slide ativo

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Função para avançar para o próximo slide
      setActiveIndex(
        (prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1), // Se estiver no último slide, volta para o primeiro
      );
    }, 4000); // Intervalo de mudança automática a cada 3 segundos (3000 milissegundos)

    // Retorna uma função de limpeza para parar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // Array vazio como segundo argumento para executar apenas uma vez na montagem do componente

  return (
  <>
  <DefaultLayout>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src={tecnologia} className="d-block w-100" alt={tecnologia} />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src={images} className="d-block w-100" alt={images} />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img src={tec2} className="d-block w-100" alt={tec2} />
          </div>
        </div>
    
        <div className="container">
          <h2>Bem-Vindo à Escola de Programaçao Tec</h2>
          <p>
            Na Escola Tec, estamos comprometidos em capacitar indivíduos
            apaixonados por tecnologia e transformá-los em programadores
            talentosos e preparados para o mercado de trabalho. Localizada em um
            ambiente inspirador no coração da cidade, nossa escola oferece uma
            variedade de programas educacionais projetados para atender às
            necessidades e aspirações de todos os nossos alunos.
          </p>
        </div>
      </div>

      <div className="container">
        <h2>O que você irá aprender para ser um Desenvolvedor Front End.</h2>
        <a className="frontImg" href="#">
          <img src={front} alt={logo} />
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
        <h3>Java Script</h3>
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
    </>
  );
}

export default Site;
