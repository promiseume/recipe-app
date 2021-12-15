import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipes({handleRecipe,handleError}) {
    return (
        <div className='container'>
            <div className='row'>
          { 
            handleRecipe.map((recipess) => <div key={recipess.title}>
            <img src={recipess.image_url} alt={recipess.title}/>
            <h1>{recipess.title.length < 23 ? `${recipess.title}` : `${recipess.title.substring(0, 30)}...`}</h1>
            <p>{recipess.publisher}</p>
            <button>
              <Link to={{pathname: `/menu/${recipess.recipe_id}`}}>
              View Recipe</Link>
              </button>
            </div>)
          }  
        </div>
        </div>
    )
}
