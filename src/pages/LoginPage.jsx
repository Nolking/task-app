import React, { useState } from "react";
import { Card, Form, } from "react-bootstrap";
import MyButton from "../Components/MyButton";
import MyContainer from "../Components/MyContainer";
import MyCard from "../Components/MyCard";
import MyFormControl from "../Components/MyFormControl";
import { useToken } from "../auth/useToken";
import { Redirect } from "react-router-dom";

const LogInPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("")
  if (token) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userId = form.userId.value;
    const userName = form.userName.value;
    console.log("userId: ", userId);
    console.log("userName: ", userName);
    if (!localStorage.getItem(userId)) {
      const newUser = {name: userName, tasks: []};
      localStorage.setItem(userId, JSON.stringify(newUser));
    } else if (userName !== JSON.parse(localStorage.getItem(userId)).name) {
      setErrorMessage("User already exists")
      return;
    }
    setToken(userId);
  };

  return (
    <React.Fragment>
      <MyContainer>
        <MyCard className="login-card">
          <Card.Title className="card-title">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userId">
              <MyFormControl type="id" placeholder="Id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userName">
              <MyFormControl type="name" placeholder="Name"/>
            </Form.Group>
            {errorMessage && <p style={{color: "red", textAlign: "left"}}>{errorMessage}</p>}
            <MyButton type="submit">
              Submit
            </MyButton>
          </Form>
        </MyCard>
        </MyContainer>
    </React.Fragment>
  )
};
export default LogInPage;
