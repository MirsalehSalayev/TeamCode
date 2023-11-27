import React from 'react'
import "./_subscribe.scss"
import SubscribeIcons from '../../Components/SubscribeIcons'

function Subscribe() {
    return (
        <section id='subscribe'>

            <div className='subscribeIcons'>
                <SubscribeIcons title="Happy Customers" description="125,663" />
                <SubscribeIcons title="Book Collections" description="50,672" />
                <SubscribeIcons title="Our Stores" description="1,562" />
                <SubscribeIcons title="Famous Writers" description="457" />

            </div>
            <div className='subscribeBox'>
                <h1 className='subscribeText'>Subscribe our newsletter for newest books updates</h1>
                <div className='rightBox'><input className='email' type="text" placeholder='Enter Your Email Address...'/> <button className='btn'>Subscribe</button></div>
            </div>
            <div className='booksCategories'><h6 className='categories'>+ Books Categories</h6></div>
        </section>
    )
}

export default Subscribe