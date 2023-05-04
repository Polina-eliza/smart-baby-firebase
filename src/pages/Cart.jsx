import React from 'react';
import "../styles/Cart.css";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col} from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import { motion } from 'framer-motion';
import { cartAction } from '../redux/slices/cartSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount);

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
                {
                  cartItems.map((item, index) => (
                <Tr item={item} key={index}/>
                  ))
                }
              </tbody>
            </table>
              )}  
          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Subtotal
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              </h6>
              
              <div>
                <button className="buy__btn cart__btn w-100"><Link to='/checkout'>Checkout</Link></button>
                <button className="buy__btn cart__btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      
    </section>
    </>
  )
};

const Tr = ({item})=> {
  const dispatch = useDispatch();

  const deleteProduct = ()=> {
    dispatch(cartAction.deleteItem(item.id))
  }
  return (
  <tr>
  <td><img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <td><span><AiFillDelete onClick={deleteProduct}/></span></td>
</tr>
  );
};

export default Cart