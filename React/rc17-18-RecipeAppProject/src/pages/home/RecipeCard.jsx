import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import {
  Cards,
  MainContainer,
  RecipeButton,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);
  const navigate = useNavigate();

  return (
    <MainContainer>
      {recipes.map(({ recipe }, i) => (
        <Cards key={i}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image} />
          <RecipeButton
            onClick={() => navigate("/details", { state: { recipe } })}
          >
            Details
          </RecipeButton>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
