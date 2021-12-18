import React from "react";
import Recipes from "./recipes";
import Search from "./search";
import "./recipePage.css";
import { useState, useEffect } from "react";

export default function Recipepage() {
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedRecipe = JSON.parse(localStorage.getItem("react-recipe-app"));
    if (savedRecipe) {
      setRecipe(savedRecipe);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-recipe-app", JSON.stringify(recipe));
  }, [recipe]);

  const searchRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    try {
      const api = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${recipeName}`
      );
      const data = await api.json();
      if (data.error) {
        setError(
          `Sorry,We couldn't find a ${recipeName} Recipe.
          Try searching for Another Recipe`
        );
      } else {
        setRecipe(data.recipes);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="recipe-page">
      <div className="recipe-header">Recipe Search</div>
      <Search getRecipe={searchRecipe} />
      {error ? (
        <div className="errorMessage">{error}</div>
      ) : (
        <Recipes handleRecipe={recipe} handleError={error} />
      )}
    </div>
  );
}
