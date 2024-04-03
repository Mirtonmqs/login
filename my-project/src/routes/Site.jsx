import { useState } from 'react';
import './Site.css';
import tecnologia from '../img/tecnologia.png'
import images from '../img/images.jpeg'
import tec from '../img/tec.jpeg'
import logo from '../img/logoaspec.png';

function Site() {
  return (
    <>
      <nav className="navbar">
      <div className="container-fluid">
          {/* Substitua o texto pelo código HTML da sua imagem de logo */}
          <a className="icone" href="#">
            <img src={logo} alt={logo} />
          </a>
          <h3>ygfg</h3>
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
                    Inscreva-se
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" 
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


      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tecnologia} className="d-block w-100" alt={tecnologia} />
          </div>
          <div className="carousel-item">
            <img src={images} className="d-block w-100" alt={images} />
          </div>
          <div className="carousel-item">
          <img src={tec} className="d-block w-100" alt={tec} />
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
    </>
  );
}

export default Site;
