import React from 'react'
import PushingCard from '../../Components/PushingCard'
import "./_pushing.scss"
import Button from '../../Components/Button'


const Pushing = () => {
    return (
        <div className='pushingComp'>
            <div className='pushingContOne'>
                <div className='bestCont'>
                    <p className='bestTitle'>BEST SELLER</p>
                    <h2>Pushing Clouds</h2>
                    <div className='NapoleonCont'>
                        <div className='napText'>
                            <p>Napoleon Hill</p>
                            <p>Sports</p>
                        </div>
                        <div className='datCont'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className='titleCont'>
                    <div className='text'>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using  Ipsum is that it has a more-or-less normal.
                        </p>
                    </div>
                    <div className='priceCont'>
                        <p className='priceOne'>$15.21</p>
                        <p className='priceTwo'>$17.2</p>
                        <p className='priceThree'>6% OFF</p>
                    </div>
                    <div className='buttonCont'>
                        <Button title='Buy Now' id="buttonComp" />
                        <button className="buttonCustom" >See details</button>
                    </div>
                </div>
                <div className='imgCont'>
                    <div>
                        <h4 >Partner</h4>
                    </div>
                    <div className='imagesComp'>
                        <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/partner-1.png" alt="" />
                        <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/partner-2.png" alt="" />
                        <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/partner-3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='pushingContTwo'>
                <img className='imgContTwo' src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/banner-media2.png" alt="" />
                <div className='cardPush'>
                    <PushingCard />
                    <PushingCard style={{ opacity: "0.5" }} />

                </div>

            </div>

        </div>
    )
}

export default Pushing