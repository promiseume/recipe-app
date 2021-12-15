import React from 'react'
import spaghetti from '../../images/spaghetti.jpg'
import salat from '../../images/salat.jpg'
import pancake from '../../images/pancake.jpg'
export default function Popular() {
    return (
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <button className='popular-button'>popular menu</button>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='example'>
        <div>
             <h1>Italian Pasta</h1>
             <p>Nothing better on a rainy afternoon than<br/> plates and plates of pasta. <br/>Fresh grown scallions from the neighbors garden,<br/> jamon, ricotta, lemon and butter. Lots of butter.</p>
             <p>30 min</p>
             </div>
             <div className='popular-img'>
             <img src={spaghetti}/>
             </div>
             </div>
    </div>
    <div class="carousel-item">
    <div className='example'>
        <div>
             <h1>Pancakes</h1>
             <p>Pancakes are one of the best meal <br/> you can have for breakfast. <br/>Made with flour,butter,milk,<br/>sugar and eggs.</p>
             <p>30 min</p>
             </div>
             <div className='popular-img'>
             <img src={pancake}/>
             </div>
             </div>
    </div>
    <div class="carousel-item">
    <div className='example'>
        <div>
             <h1>Salad</h1>
             <p>This beautiful yet nutritious salad was made with<br/> avocado, tofu, orange, sweet corn, tomatoes, eggs,<br/> food, salad selection, lunch menu,<br/> menu, Daily Greens.</p>
             <p>25 min</p>
             </div>
             <div className='popular-img'>
             <img src={salat}/>
             </div>
             </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}
