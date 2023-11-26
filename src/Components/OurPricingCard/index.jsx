import React from 'react'
import Button from '../Button'
import "./_ourPricingCard.scss"

function OurPricingCard({ plan, price }) {
    return (
        <div className='ourPricingCard'>
            <h2>{plan} Plan</h2>
            <div className="ourPricingCardPrice">{price}<span>/Month</span></div>
            <div className="ourPricingCardText">Aliquam dui lacus, lobortis quis sapien non.</div>
            <div className="ourPricingCardCourses">
                <ul>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>Graphic Design</li>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>Web Design  </li>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>UI/UX</li>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>HTML/CSS</li>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>SEO Marketing</li>
                    <li><div className="coursesIcon"><i class="fa-solid fa-check"></i></div>Business Analysis</li>
                </ul></div>
            <div className="ourPricingCardButton"><Button title="Start Now" ></Button></div>
        </div>
    )
}

export default OurPricingCard