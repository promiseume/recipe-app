import React from "react";
import { Link } from "react-router-dom";

export default function Recipes({ handleRecipe }) {
  return (
    <div className="row">
      {handleRecipe.map((recipess) => (
        <div key={recipess.title}>
          <img src={recipess.image_url} alt={recipess.title} />
          <h3>
            {recipess.title.length < 20
              ? `${recipess.title}`
              : `${recipess.title.substring(0, 20)}...`}
          </h3>
          <button>
            <Link
              to={{ pathname: `/menu/${recipess.recipe_id}` }}
              style={{ textDecoration: "none", color: "white" }}
            >
              View Recipe
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
