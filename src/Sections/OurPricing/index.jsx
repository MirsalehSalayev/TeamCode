import React from 'react'
import OurPricingCard from '../../Components/OurPricingCard'
import "./_ourPricing.scss"
function OurPricing() {
    return (
        <section id='ourPricing'>
            <div className="ourPricingCont">
                <h1>Our Pricing</h1>
                <div className="ourPricingText">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                </div>
                <div className="ourPricingCardCont">
                    <OurPricingCard plan="Basic" price="$79.99"></OurPricingCard>
                    <OurPricingCard plan="Standart" price="$99.99"></OurPricingCard>
                    <OurPricingCard plan="Premium" price="$129.99"></OurPricingCard>

                </div>
            </div>
        </section>
    )
}

export default OurPricing