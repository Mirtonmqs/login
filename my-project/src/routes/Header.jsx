import React, { useState, useEffect } from 'react';
import './Site.css'; 
import logo from '../img/logoaspec.png';


const Header = () => {
  return (
    <>
    <nav className="navbar">
      <div className="container-fluid">
        <a className="icone" href="#">
          <img src={logo} alt={logo} />
        </a>
        <h3 className="titulo">TEC</h3>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span>Login</span>
        </button>
        
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuário
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Header;