import React from 'react'
import "./_booksalecard.scss"
const BooksSaleCard = () => {
  return (
    <div className='bookSaleCard'>
        <div className='cardImage'>
            <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/a7cbc9ec4f61f7713101612a45211ebb-450x600.jpg" alt="" />
        </div>
        <div className='cardInfo'>
            <h2><a href="!">Terrible Madness</a></h2>
            <span><a href="!">Business,  Strategy</a></span>
            <div className='priceAndRating'>
            <div className='rating'> <i class="fa-solid fa-star"></i>
            <span>4.00</span> 
             </div>
             <div className='price'><span>$50.00</span></div>
            </div>
        </div>
    </div>
  )
}

export default BooksSaleCard