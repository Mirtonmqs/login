import { useState } from 'react';
import './Site.css';
import tecnologia from '../img/tecnologia.png'
import images from '../img/images.jpeg'
import tec from '../img/tec.jpeg'

function Site() {
  return (
    <>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            INFO TEC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/Register"
                  >
                    Inscreva-se
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" 
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
