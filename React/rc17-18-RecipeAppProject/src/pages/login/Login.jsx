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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { name, password, setName, setPassword } = useContext(RecipeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />
        <Header>{"<Clarusway>"} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
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
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
