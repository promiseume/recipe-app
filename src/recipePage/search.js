import React from "react";

export default function Search({ getRecipe }) {
  return (
    <div className="search">
      <form onSubmit={getRecipe}>
        <input
          type="search"
          placeholder="search for a recipe"
          type="text"
          name="recipeName"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
