import React from 'react'

export default function Search({getRecipe}) {
    return (
        <form onSubmit={getRecipe}>
         <input placeholder='search for a recipe' type='text' name='recipeName'/>
         <button>Search</button>   
        </form>
    )
}
