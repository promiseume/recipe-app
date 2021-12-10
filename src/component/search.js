import React from 'react'

export default function Search({getRecipe}) {
    return (
        <div>
        <form onSubmit={getRecipe} class="d-flex">
        <input class="form-control me-2" type="search" placeholder='search for a recipe' type='text' name='recipeName'/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> 
        </div>
    )
}
