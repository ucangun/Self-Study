import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import {
  Cards,
  MainContainer,
  RecipeButton,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <MainContainer>
      {recipes.map(({ recipe }) => (
        <Cards key={recipe.label}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image} />
          <RecipeButton>Details</RecipeButton>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
