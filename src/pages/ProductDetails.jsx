import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from "../assets/data/production";
import CommonSection from '../components/UI/CommonSection';
import "../styles/ProductDetails.css";
import { motion } from 'framer-motion';
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';



const ProductDetails = () => {
  const {id} = useParams();
  const product = products.find(item=> item.id === id);
  const dispatch = useDispatch();


  const { imgUrl, productName, price,  description, shortDesc, category } = product;

  const relatedProducts = products
  .filter(item => item.category === category && item.id !== id)
  .slice(0, 4);

  const addToCart =()=> {
    dispatch(
      cartAction.addItem({
        id, 
        image: imgUrl, 
        productName, 
        price
      }),
    );
    toast.success('Product added successfully');
    };
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [product]);

  return (
    <>
     <CommonSection title={productName} />
    <section className='pt-6'>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="" />
          </Col>

          <Col lg="6">
            <div className="product__details">
              <h2>{productName}</h2>
              <span className='product__price'>${price}</span>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button whileTap={{scale: 1.2}} className='buy__btn cart__btn' onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
      <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="tab__wrapper">
              <h6 className='long__desc'>Description</h6>
            </div>
            <div className="tab__content mt-4">
              <p>{description}</p>
            </div>
          </Col>
          <Col lg="12" className='mt-5'>
            <h2 className='related__title'>You might also like</h2>
          </Col>
          <ProductsList data={relatedProducts} />
        </Row>
      </Container>
      </section>
      
    
    </section>
    </>
   
  )
}

export default ProductDetails