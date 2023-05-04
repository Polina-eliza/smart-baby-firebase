import React, {useRef, useEffect } from 'react';
import "./Header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/smart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBag, BsHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import useAuth from '../../costom-hooks/useAuth';
import { Link } from 'react-router-dom';

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  { 
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {currentUser} = useAuth();


  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate("/cart");
  }


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="nav__icons">
              <div className="fav__icon">
                <BsHeart size={22} />
                <span className="badge">1</span>
              </div>
              <div className="cart__icon" onClick={navigateToCart}>
                <BsBag size={22} />
                <span className="badge">{totalQuantity}</span>
              </div>
              <div className='profile'>
              <FaUserAlt className="user__icon" size={22} />
              </div>

              <div className='profile__actions'>
                {
                  currentUser ? <span>Logout</span> : <div>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                  </div>
                }
              </div>
             
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                <GiHamburgerMenu size={22} />
                </span>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
