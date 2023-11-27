import React from 'react'
import "./_booksalecard.scss"
const BooksSaleCard = ({img,title,info,rating,beforeprice,price}) => {
  return (
    <div className='bookSaleCard'>
        <div className='cardImage'>
            <img src={img} alt="" />
        </div>
        <div className='cardInfo'>
            <h2><a href="!">{title}</a></h2>
            <span><a href="!">{info}</a></span>
            <div className='priceAndRating'>
            <div className='rating'> <i class="fa-solid fa-star"></i>
            <span>{rating}</span> 
             </div>
             <div className='price'>
                <span className='before'>{beforeprice}</span>
                <span className='after'>{price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BooksSaleCard