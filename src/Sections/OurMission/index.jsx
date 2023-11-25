import React from 'react'
import "./_our.scss"
import Card from '../../Components/OurMissionCard'

const OurMission = () => {
    return (
        <div id='ourMission'>
            <div className='sectionContainer'>
                <div className='sectionContet'>
                    <div className='title'><h2>Our Mission</h2></div>
                    <div className='text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p></div>
                </div>
                <div className='cardContainer'>
            <Card icon='fa-book' title='Best Bookstore'/>
            <Card icon='fa-award' title='Trusted Seller'/>
            <Card icon='fa-store' title='Expand Store'/>
            </div>
           </div>
        </div>
    )
}

export default OurMission