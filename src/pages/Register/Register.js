import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error("Password Not Matched With Confirm Password");
    } else {
      try {
        const result = await axios.post(
          "http://localhost:4000/api/user/register",
          { name, email, password }
        );
        toast.success(result?.data?.message)
        navigate('/login')
      } catch (err) {
        toast.error(err?.response?.data?.message)
      }
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
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" value="Register">
          Submit
        </Button>
        <p>
          Already Have Account? <Link to="/login">Login Here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
