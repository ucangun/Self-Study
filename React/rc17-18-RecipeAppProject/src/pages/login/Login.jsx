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
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";

const Login = () => {
  const { name, password, setName, setPassword } = useContext(RecipeContext);

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />
        <Header>{"<Clarusway>"} Recipe</Header>
        <StyledForm></StyledForm>
        <StyledInput
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <StyledButton>Login</StyledButton>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
