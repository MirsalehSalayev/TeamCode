import React from 'react'
import BooksSaleCard from '../../Components/BooksSaleCard';
import "./_booksale.scss";


const BooksOnSale = () => {
    return (
        <div className='booksOnSaleSection'>
            <div className='sectionContainer'>
                <div className="sectionHead">
                    <div className='sectionName'>Books on Sale</div>
                    <div className='swipperIcon'>
                    <i class="fa-solid fa-angle-left"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle checked"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-circle"></i>
                    <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div className="cardContainer">
                    <BooksSaleCard/>
                    <BooksSaleCard/>
                    <BooksSaleCard/>
                    <BooksSaleCard/>
                    <BooksSaleCard/>
                </div>
            </div>
        </div>
    )
}

export default BooksOnSale