import React from 'react'
import "./_subscribeicons.scss"

function SubscribeIcons({title,description}) {
  return (
    <div className='subscribeCard'>
        <div className='icn'><i class="fa-solid fa-users fa-shake"></i></div>
        <h3 className='customer'>{description}</h3>
        <span className='customerText'>{title}</span>
    </div>
  )
}

export default SubscribeIcons