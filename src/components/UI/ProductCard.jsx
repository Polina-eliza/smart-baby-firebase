import {AiOutlinePlusCircle} from 'react-icons/ai';
import {motion} from 'framer-motion';
import '../../styles/ProductCard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4' className='mb-2'>
    <div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info">
        <h3 className='product__name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span className='age__group'>{item.category}</span>
        </div>
        
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">{item.price}</span>
            <AiOutlinePlusCircle size={25} />
        </div>
    </div>
    </Col>
  )
}

export default ProductCard