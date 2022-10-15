import React, { useEffect, useState } from "react";
// import './loginscreen.css'
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import styled from "styled-components";
import axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const LoginPage = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 

  const submitHandler =async (e) => {
    e.preventDefault()
   try{
    const config={
        "Content-Type":"application/json"
    }
    setLoading(true)

    const {data}=await axios.post(
        '/api/users/login',
    {email,password}
    ,config
    )
    console.log(data);
    localStorage.setItem('userInfo',JSON.stringify(data))
    setLoading(false)

   }
   catch(error){
       setError(error.response.data.message)
         setLoading(false)
      
   }
  }

  return (
    <MainScreen title="LOGIN">
      <LoginContainer>
        <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading/>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               type="email" 
               value={email}
               placeholder="Enter email"
               onChange={(e) => setEmail(e.target.value)}
                />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
               type="password" 
               value={password}
               placeholder="Password" 
               onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
          <Row className="py-3 ">
            <Col>
              New Customer? <Link to="/register">Register</Link>
            </Col>
          </Row>
        </div>
      </LoginContainer>
    </MainScreen>
  );
};

export default LoginPage;
