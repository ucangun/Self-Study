import React from "react";
import data from "../data";
import Image from "./styles/ImageStyle";
import CardStyle from "./styles/CardStyle";

const Card = () => {
  return (
    <div>
      {data.map((item) => (
        <CardStyle key={item.id} umut={item.id % 2 === 1 && "row-reverse"}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          <Image src={`./images/${item.image}`} alt="images" />
        </CardStyle>
      ))}
    </div>
  );
};

export default Card;
