import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";

const CocktailCard = ({ cocktail, history }) => {
  const goToInstructionsCard = (name) => {
    history.push({
      pathname: name,
      state: { cocktail },
    });
  };
  return (
    <div
      onClick={() => goToInstructionsCard(cocktail.strDrink)}
      className="cocktail-card"
    >
      <div className="image-container">
        <img className="image" src={cocktail?.strDrinkThumb} />
      </div>
      <p>{cocktail.strDrink}</p>
    </div>
  );
};

export default withRouter(CocktailCard);
