import React, { useState } from "react";
import { Card, Form, } from "react-bootstrap";
import StyledButton from "../Components/StyledComponents/StyledButton";
import StyledContainer from "../Components/StyledComponents/StyledContainer";
import StyledCard from "../Components/StyledComponents/StyledCard";
import StyledFormControl from "../Components/StyledComponents/StyledFormControl";
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
    console.log(event)
    const form = event.currentTarget;
    console.log(form)
    const userId = form.userId.value;
    const userName = form.userName.value;
    if (!localStorage.getItem(userId)) {
      const newUser = {name: userName};
      localStorage.setItem(userId, JSON.stringify(newUser));
    } else if (userName !== JSON.parse(localStorage.getItem(userId)).name) {
      setErrorMessage("User already exists")
      return;
    }
    setToken(userId);
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledCard className="login-card">
          <Card.Title className="card-title">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userId">
              <StyledFormControl type="id" placeholder="Id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userName">
              <StyledFormControl type="name" placeholder="Name"/>
            </Form.Group>
            {errorMessage && <p style={{color: "red", textAlign: "left"}}>{errorMessage}</p>}
            <StyledButton type="submit">
              Submit
            </StyledButton>
          </Form>
        </StyledCard>
        </StyledContainer>
    </React.Fragment>
  )
};
export default LogInPage;
