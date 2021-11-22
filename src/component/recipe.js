import React from 'react'

export default function Recipe({handleRecipe}) {
    return (
        <div className='container'>
            <div className='row'>
          {
            handleRecipe.map((recipess) => <div key={recipess.title}>
            <img src={recipess.image_url} alt={recipess.title}/>
            <h1>{recipess.title}</h1>
            <p>{recipess.publisher}</p>
            </div>)
          }  
          <button>view recipe</button>
        </div>
        </div>
    )
}
