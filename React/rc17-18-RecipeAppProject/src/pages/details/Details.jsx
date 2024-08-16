import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1> </h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart></OtherPart>

        <ImgContainer>
          <img src="" alt="" />
        </ImgContainer>

        <IngredContainer></IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
