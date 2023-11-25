import React from 'react'
import "./_card.scss"

function RecommendedForYouCard({img,title,description}) {
    return (
        <div className='card'>
            <img className='image' src= {img} alt="" />
            <h3 className='cartName'>{title}</h3>
            <span className='cost'>{description}</span>
            <div className='btn'><span className='icon'><i class="fa-solid fa-cart-shopping"></i></span><span className='text'>Add To Cart</span></div>
        </div>
    )
}

export default RecommendedForYouCard