import React from 'react'
import "./_ourcard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
library.add(faBook, faAward, faStore)
const Card = ({ icon, title }) => {
  return (
    <div className='ourMissionCard'>
      <div className='cardContent'>
        <FontAwesomeIcon className='icon' icon={icon} />
        <div className='cardInfo'>
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="!">Learn More <i class="fa-solid fa-angles-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Card