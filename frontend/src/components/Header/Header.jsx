import React, { useRef, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

import { useAuthContext } from "../../hooks/consumeContext";
import { useLogout } from "../../hooks/userLogOutHook";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "about",
  },
  {
    path: "/services",
    display: "services",
  },
];

const Header = () => {
  const { user } = useAuthContext('test@gmail.com');
  console.log(user?.getUser.email);
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");


  const { logout } = useLogout();
  const handleLogout = () => {
    console.log('logged out');
    logout()
  }
  return (
    <header className="header">

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/" className=" d-flex align-items-center gap-2">
                    <i class="ri-gas-station-line"></i>
                    <span>
                      Fuel<br />App
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {
              user && (
                <div className="nav__right">
                  <p style={{ backgroundColor: 'red' }}>Welcome back {user?.getUser.email}</p>
                  <button onClick={() => handleLogout()}>LOG OUT</button>
                </div>
              )
            }
            {
              !user && (
                <div className="nav__right">
                  <a href='/login'>Login</a>
                  <a href='/register'>Register</a>
                </div>
              )
            }
            {/* <div className="nav__right">
          <a href='/login'>Login</a>
          <a href='/register'>Register</a>
          <p style={{backgroundColor:'red'}}>{user?.getUser.email}</p>
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
