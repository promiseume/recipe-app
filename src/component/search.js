import React from 'react'

export default function Search({getRecipe}) {
    return (
        <div className='nav'>
         <h3>Food<span>Mood</span></h3>
        <form onSubmit={getRecipe}>
         <input class="form-control form-control-lg"  placeholder='search for a recipe' type='text' name='recipeName'/>
         <button>Search</button>  
        </form>
        </div>
    )
}
