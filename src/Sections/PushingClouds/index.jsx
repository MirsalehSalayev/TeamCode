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
                        <p>Napoleon Hill</p>
                        <p>Sports</p>
                    </div>
                </div>
                <div className='titleCont'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                    </p>
                    <div className='priceCont'>
                        <p>$15.21</p>
                        <p>$17.2</p>
                        <p>6% off</p>
                    </div>
                    <div className='buttonCont'>
                        <Button title='Buy Now' />
                        <Button title='Buy Now' />
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Pushing