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
                    <BooksSaleCard img='https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/a7cbc9ec4f61f7713101612a45211ebb-450x600.jpg' title='Terrible Madness'
                    info='Business, Strategy'
                    rating='4.0'
                    price='$50.00'/>
                    <BooksSaleCard img='https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/e5927e87ecbec52ddfbc4a24d3eb056e-450x600.jpg' title='Pushing Clouds'
                    info='Drama, Strategy'
                    rating='5.00'
                    beforeprice='$50.00'
                    price='$30.00'/>
                    <BooksSaleCard img='https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/cover-450x600.png' title='Think'
                    info='Sports, Strategy'
                    rating='4.00'
                    beforeprice='$25.00'
                    price='$10.00'/>
                    <BooksSaleCard img='https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/994d4fa6f936ff999ebe7ddb54d3a78e-450x600.jpg' 
                    title='Take Out Tango'
                    info='Business, Sport'
                    rating='5.00'
                    beforeprice='$50.00'
                    price='$40.00'/>
                    <BooksSaleCard img='https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-450x600.jpg'
                    title='Battle Drive'
                    info='Drama, Sports'
                    rating='4.00'
                    beforeprice='$25.00'
                    price='$20.00'/>
                </div>
            </div>
        </div>
    )
}

export default BooksOnSale