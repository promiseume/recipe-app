import React from 'react'
import noodles from '../../images/noodles.jpg'
import cake from '../../images/cake.jpg'
import fruitsalad from '../../images/fruitsalad.jpg'
import burger from '../../images/burger.jpg'
import meat from '../../images/meat.jpg'
import meatball from '../../images/meatball.jpg'
import pancake from '../../images/pancakes.jpg'
import pizza from '../../images/pizza.jpg'
import spaghetti from '../../images/spaghetti.jpg'

export default function Section() {
    return (
        <div id='about' className='section'>
          <h3>Popular Food</h3>  
          <p>We provide a variety of food and beverages recipes with high taste from famous chef.</p>
          <div className='images'>    
          <img src={noodles} alt='salad'/>
          <img src={cake} alt='cake'/>
          <img src={fruitsalad} alt='fruitsalad'/>
          <img src={burger} alt='burger'/>
          <img src={meat} alt='meat'/>
          </div>
          <div className='images'>
          <img src={meatball} alt='meatball'/>
          <img src={pancake} alt='pancake'/>
          <img src={pizza} alt='pizza'/>
          <img src={spaghetti} alt='spaghetti'/>
          </div>
          </div>
    )
}
