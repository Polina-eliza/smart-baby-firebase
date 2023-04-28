import "./Header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/smart-logo.svg";
import { NavLink } from "react-router-dom";
import { BsBag, BsHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="navigation">
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
              <div className="cart__icon">
                <BsBag size={22} />
                <span className="badge">1</span>
              </div>
              <FaUserAlt className="user__icon" size={22} />
            </div>

            <div className="mobile__menu">
              <GiHamburgerMenu size={22} />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
