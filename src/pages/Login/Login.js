import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await axios.post(
        "http://localhost:4000/api/user/login",
        values
      );
      toast.success(result?.data?.message)
      localStorage.setItem('authToken', result?.data?.token)
      navigate('/')
    }catch(err){
      toast.error(err?.response?.data.message)
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      navigate('/')
    }
  },[navigate])
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" value="Login">
          Submit
        </Button>
        <p>
          Not Have Any Account? <Link to="/register">Register Here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
