import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import { useLocation } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="logo" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>NUTRIENTS</>
          <span>
            {recipe.totalNutrients.CA.label}:
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </span>
          <span>
            {" "}
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </span>
          <span>
            {" "}
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={recipe.image} alt="food" />
        </ImgContainer>

        <IngredContainer></IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
