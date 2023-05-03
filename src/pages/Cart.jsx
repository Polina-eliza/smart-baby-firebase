import React from 'react';
import "../styles/Cart.css";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col} from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import Animal from "../assets/images/animal-tower.webp";
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <>
    <CommonSection title='Shopping Cart' />
    <section>
      <Container>
        <Row>
          <Col lg='9'>
          {
              cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No item added to the cart</h2>
              ) : (
                <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={Animal} alt="" /></td>
                  <td>Animal Tower Building Set</td>
                  <td>$8.99</td>
                  <td>2px</td>
                  <td><span><AiFillDelete /></span></td>
                </tr>
              </tbody>
            </table>
              )}  
          </Col>
          <Col lg='3'>
            
          </Col>
        </Row>
      </Container>
      
    </section>
    </>
    
  )
}

export default Cart