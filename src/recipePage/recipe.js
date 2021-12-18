import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipe() {
  const [fullRecipe, setFullRecipe] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setFullRecipe(data.recipe));
  }, [id]);
  return (
    <div className="single-recipe-page">
      <div>
        <h1>{fullRecipe.title}</h1>
        <img src={fullRecipe.image_url}></img>
        <p> Publisher: {fullRecipe.publisher}</p>
        <div className="links">
          <a href={fullRecipe.source_url}>See Preparation Method</a>
          <button className="return-button">
            <Link style={{ textDecoration: "none" }} to="/recipes">
              Go home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
