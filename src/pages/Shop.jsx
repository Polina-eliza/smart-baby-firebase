import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import {BsSearch} from "react-icons/bs";
import "../styles/Shop.css";
import products from '../assets/data/production';
import ProductsList from '../components/UI/ProductsList';


const Shop = () => {
  const [productsData, setProductsData ] = useState(products);

  const handleFilter = e=> {
    const filterValue = e.target.value;
    if(filterValue === 'two-years') {
      const filteredProducts = products.filter(
        (item) => item.category === '2 Years'
      );
    setProductsData(filteredProducts);
  }

  if(filterValue === 'three-years') {
    const filteredProducts = products.filter(
      (item) => item.category === '3 Years'
    );
  setProductsData(filteredProducts);
}

if(filterValue === 'five-years') {
  const filteredProducts = products.filter(
    (item) => item.category === '5 Years'
  );
setProductsData(filteredProducts);
}
  };

  const handleSearch = e => {
    const searchTerm = e.target.value 
    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

    setProductsData(searchedProducts)
  }

  return (
    <div>
      <CommonSection title='Products'/>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                <option>Filter by Category</option>
                  <option value="two-years">Age: 2 years old</option>
                  <option value="three-years">Age: 3 years old</option>
                  <option value="five-years">Age: 5 years old</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className='text-end'>
            <div className="filter__widget">
                <select>
                <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder='Search....' onChange={handleSearch} />
                <span><BsSearch/></span> 
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center fs-4'>No products are found</h1> :
              <ProductsList data={productsData} />
            }

          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Shop