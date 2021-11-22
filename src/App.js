import Recipe from "./component/recipe";
import Search from "./component/search";
import { useState } from "react";

function App() {

  const [recipe, setRecipe] = useState([]);

   const searchRecipe = async(e) =>{
     e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
     const api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);
     const data = await api.json();
     setRecipe(data.recipes)
     console.log(recipe)
  }

  return (
    <div className="App">
      <Search getRecipe ={searchRecipe}/>
      <Recipe handleRecipe ={recipe}/>
    </div>
  );
}

export default App;
