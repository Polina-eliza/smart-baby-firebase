import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/smart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBag, BsHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import useAuth from "../../costom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from "react-toastify";

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
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
    };

    const logout = () => {
      signOut(auth).then(()=> {
        toast.success('Logged out');
        navigate('/home');
      }).catch(err=>{
        toast.error(err.message);
      });    
    };
  
  
    useEffect(() => {
      stickyHeaderFunc();

      return () => window.removeEventListener('scroll', stickyHeaderFunc);
    });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

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
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="nav__icons">
              <div className="fav__icon">
                <BsHeart size={22} />
                <span className="badge">0</span>
              </div>
              <div className="cart__icon" onClick={navigateToCart}>
                <BsBag size={22} />
                <span className="badge">{totalQuantity}</span>
              </div>
              <div className="profile" onClick={toggleProfileActions} >
                <FaUserAlt className="user__icon" size={22} />
              </div>

              <div
                className="profile__actions"
                ref={profileActionRef}
                onClick={toggleProfileActions}
              >
                {currentUser ? (
                  <span onClick={logout} >Logout</span>
                ) : (
                  <div className=" d-flex align-items-center justify-content-center flex-column">
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                  </div>
                )}
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
