import React from 'react'

export default function Search({handleSearch}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#"> <h3>Food<span>Mood</span></h3></a>
      <div class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Recipe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    )
}

{/* <form onSubmit={getRecipe} class="d-flex">
        <input class="form-control me-2" type="search" placeholder='search for a recipe' type='text' name='recipeName'/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}