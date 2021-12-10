import React from 'react'
import Recipes from "./recipes";
import Search from './search';
import { useState, useEffect } from "react";

export default function Recipepage() {
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
        <div>
            <h1>hi</h1>
           <Search getRecipe ={searchRecipe}/> 
           <Recipes handleRecipe ={recipe}/>
        </div>
    )
}
