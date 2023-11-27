import React from 'react';
import './_bookland.scss';
import Button from '../../Components/Button';




const Bookland = () => {
    return (
        <div className='Bookland'>

            <div className='BooklandContainer'>
                <div className='BooklandTop'>
                    <div className='BooklandTopLeft'>
                        <div className='BooklandImgOne'>
                            <img className='bookImgOne' src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/about1.jpg" alt="" />
                        </div>
                        <div className='BooklandLeftVol2'>
                            <div className='BooklandImgTwo'>
                                <img className='bookImgTwo' src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/about2.jpg" alt="" />
                            </div>
                            <div className='fiftyCont'>
                                <div className='fifty'>
                                    <h1 className='fiftyHead'>50+</h1>
                                    <p className='fiftyTitle'>Years of Experience</p>
                                </div>
                                <div className='BookList'>
                                    <div className='BookListComp'>
                                        <i>x</i>
                                        <p>Comics & Graphics</p>
                                    </div>
                                    <div className='BookListComp'>
                                        <i>x</i>
                                        <p>Comics & Graphics</p>
                                    </div>
                                    <div className='BookListComp'>
                                        <i>x</i>
                                        <p>Comics & Graphics</p>
                                    </div>
                                    <div className='BookListComp'>
                                        <i>x</i>
                                        <p>Comics & Graphics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='BooklandTopRight'>
                        <h2>Bookland Is Best Choice For Learners</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
                        <Button title="Cotact us" />
                    </div>
                </div>
                <div className='BooklandBottom'>
                    <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client1.svg" alt="" />
                    <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client2.svg" alt="" />
                    <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client3.svg" alt="" />
                    <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client4.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bookland