import { useState } from 'react';
import './Site.css';
import tecnologia from '../img/tecnologia.png';
import images from '../img/tab.png';
import tec2 from '../img/tec2.jpg';
import logo from '../img/logoaspec.png';

function Site() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="icone" href="#">
            <img src={logo} alt={logo} />
          </a>
          <h3 className="titulo">TEC </h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Register"
                  >
                    Registre-se
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Login"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

     <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={tecnologia} className="d-block w-100" alt={tecnologia} />
    </div>
    <div className="carousel-item">
      <img src={images} className="d-block w-100" alt={images} />
    </div>
    <div className="carousel-item">
      <img src={tec2} className="d-block w-100" alt={tec2} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className="container">
        <h2>Qual a função do desenvolvedor Front End?</h2>
        <p>
          O profissional desenvolvedor front-end é o responsável por colocar em
          prática, através de códigos, o design de um site ou interface.
          Enquanto o web design projeta o visual de um site, o desenvolvimento
          front-end implementa esse design através de códigos, como HTML, CSS e
          JavaScript.
        </p>
        <p>
          O front-end também deve ser capaz de se “comunicar” com a linguagem
          utilizada no back-end, que é a parte estrutural de sites e
          plataformas. Dessa forma, o visual de uma interface conseguirá ter
          suas funções correspondidas, como quando clicamos em um botão de
          “enviar mensagem” e a mensagem realmente é enviada. Podemos dizer que
          tudo o que um usuário vê, interage ou clica é fruto do trabalho de um
          desenvolvedor front-end, que deve garantir que o site ou interface
          funcione corretamente e siga um design padrão em todos os
          dispositivos.
        </p>
      </div>
    </>
  );
}

export default Site;
