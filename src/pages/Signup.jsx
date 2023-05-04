import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      await setDoc(doc(db, `users/${user.uid}`), {
        email: user.email,
      });

      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(`Failed to create account: ${error.message}`);
    }
  };


  return (
    <section>
      <Container>
        <Row>
          {loading ? (
            <Col lg="12" className="text-center">
              <h5 className="fw-bold">Loading....</h5>
            </Col>
          ) : (
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>

              <Form className="auth__form" onSubmit={signup}>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button className="buy__btn auth__btn" type="submit">
                  Create an Account
                </button>
                <p className="login__text">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
