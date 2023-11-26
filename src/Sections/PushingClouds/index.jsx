import React from 'react'
import "./_pushing.scss"
import Button from '../../Components/Button'


const Pushing = () => {
    return (
        <div className='pushingComp'>
            <div className='pushingContOne'>
                <div className='bestCont'>
                    <p>BEST SELLER</p>
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
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                        </p>
                    </div>
                    <div className='priceCont'>
                        <p>$15.21</p>
                        <p>$17.2</p>
                        <p>6% off</p>
                    </div>
                    <div className='buttonCont'>
                        <Button title='Buy Now' />
                        <Button title='Buy Now' color="#ffff" />
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Pushing