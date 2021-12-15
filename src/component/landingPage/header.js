import React from 'react'
import img from '../../images/img.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-text'>
          <h3>Let's Start <br/>Cooking With <br/> Popular Recipes</h3>
          <p>want to make a dish but don't know where to start?<br/> No need to worry again!</p>
            </div>
            <div className='header-img'>
                <img src={img} alt='header image'/>
                {/* <div className='header-div'><h3>Pancake</h3>
                <p>flour,sugar,<br/>milk,egg</p>
                </div> */}
            </div>
        </div>
    )
}
