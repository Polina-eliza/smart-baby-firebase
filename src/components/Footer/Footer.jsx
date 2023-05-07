import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiPhoneMissedCall, HiOutlineMail } from 'react-icons/hi';


const Footer = () => {
  const year = new Date().getFullYear()
  return (
   <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4'>
        <div className="logo__text">
              SMARTBABY
            </div>
            <p className='footer__text mt-4'><span>Revolution in Education!</span> <br />
This is a new breakthrough, a small revolution in educational games for children.</p>
        </Col>

        <Col lg='3' md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="#">Age 2</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="#">Age 3</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="#">Age 5</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>  

        <Col lg='2' md='3' className='mb-4'>
        <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="/shop">Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="/cart">Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link className='footer__links' to="/login">Login</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col> 

        <Col lg='3' md='4' className='mb-4'>
        <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <HiOutlineLocationMarker size={23} />
                <p>23 Green Park, London, SW12 677</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <HiPhoneMissedCall size={23} />
                <p>+447729753823</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <HiOutlineMail size={23} />
                <p>contact@smartbaby.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="12">
          <p className='footer__copyright'>Copyright {year} <br /> Developed by Polina Eliza Lipse. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
   </footer>
  )
}

export default Footer