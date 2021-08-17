import React from "react";
import "./index.css";

const Details = (props) => {
  const { strDrink, strDrinkThumb, strInstructions, strGlass } =
    props.location.state.cocktail;
  return (
    <div className="details-container">
      <div className="drink-img-name">
        <h3>{strDrink}</h3>
        <div className="image-container">
          <img className="image" src={strDrinkThumb} />
        </div>
      </div>
      <div className="drinks-instructions">
        <h3>Instructions</h3>
        <p>{strInstructions}</p>
        <h3>Glass</h3>
        <p>{strGlass}</p>
      </div>
    </div>
  );
};

export default Details;
