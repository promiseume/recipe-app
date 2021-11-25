import Recipes from "./component/recipes";
import Search from "./component/search";
import Recipe from "./component/recipe"
import { useState } from "react";


function App() {

  const [recipe, setRecipe] = useState([]);

   const searchRecipe = async(e) =>{
     e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
     const api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);
     const data = await api.json();
     setRecipe(data.recipes)
  }

  return (
    <div className="App">
      <Search getRecipe ={searchRecipe}/>
      <Recipes handleRecipe ={recipe}/>
    </div>

  );
}

export default App;
