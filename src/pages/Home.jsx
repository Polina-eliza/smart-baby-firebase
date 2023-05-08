import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/production";
import brain from "../assets/images/brain.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "5 Years"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "3 Years"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <div className="home">
      <section className="hero__section">
        <Container>
          <div className="hero__content">
            <p className="hero__subtitle"> Trending Products in {year}</p>
            <h2>Welcome to the store!</h2>
            <p className="hero__text">
              Our products will help your child to develop fine motor skills,
              speech, logical thinking, creative imagination and much more ⭐
            </p>
            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
              <Link to="shop">SHOP NOW</Link>
            </motion.button>
          </div>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sellers</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-3 mb-2">-20% on Everything</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img className="brain__img" src={brain} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
