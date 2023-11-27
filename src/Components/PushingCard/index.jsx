import React from 'react'
import "./_pushingCard.scss"

const PushingCard = () => {
    return (
        <div className='CardCont'>
            <img className='CardImg' src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/b01e854ce12519d3d7bac72bd7bf8e0f-100x100.jpg" alt="" />
            <h4>Battle Drive 45$</h4>
            <div className='iconCont'>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star" ></i>

            </div>
        </div>
    )
}

export default PushingCard