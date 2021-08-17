import "./index.css";
import { useState } from "react";
import CocktailCard from "../../components/CocktailCard";

const Home = () => {
  const [query, setQuery] = useState("");

  const [cocktails, setCocktails] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCocktails(result);
      });
  };

  return (
    <div className="home">
      <h1 className="cocktail-heading">Cocktails Finder</h1>
      <form className="cocktail_search" onSubmit={onSubmit}>
        <input
          type="text"
          className="cocktail_input"
          placeholder="Search for a cocktail..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="search_btn" type="submit" value="Search" />
      </form>
      <div className="cocktail-container">
        {cocktails?.drinks?.map((item) => {
          return <CocktailCard cocktail={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
