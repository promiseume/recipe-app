import React from 'react'

export default function Recipe({handleRecipe}) {
    return (
        <div>
          {
            handleRecipe.map((recipess) => <><img src={recipess.image_url}/>
            <h1>{recipess.title}</h1>
            </>)
          }  
        </div>
    )
}
