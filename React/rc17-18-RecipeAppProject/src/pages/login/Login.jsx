import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealFoto from "../../assets/meal.svg";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />
        <Header>{"<Clarusway>"} Recipe</Header>
        <StyledForm></StyledForm>
        <StyledInput type="text" placeholder="username" required />
        <StyledInput type="password" placeholder="password" required />
        <StyledButton>Login</StyledButton>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
