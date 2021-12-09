import Recipes from "./component/recipes";
import Search from "./component/nav";
import Recipe from "./component/recipe"
import Section from "./component/section";
import Header from "./component/header";
import { useState, useEffect } from "react";
import Popular from "./component/popular";

function App() {

  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');


   const searchRecipe = async(e) =>{
     e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    try{
     const api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);
     const data = await api.json();
     setRecipe(data.recipes)}
     catch(error){
      console.error('error fetching data : ' , error)
      setError(error)
    }
  }

  return (
    <div className="App">
      {/* <Search getRecipe ={searchRecipe}/> */}
      <Search/>
      <Header/>
      <Section/>
      <Popular/>
      <Recipes handleRecipe ={recipe}/>
    </div>

  );
}

export default App;
