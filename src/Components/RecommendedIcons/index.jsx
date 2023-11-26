import React from 'react'
import "./_icon.scss"

function RecommendedIcons({title}) {
  return (
    <div className='iconCart'>
<div className='icon'><i class="fa-solid fa-bolt-lightning fa-shake"></i></div>
<h5 className='iconHeader'> {title}</h5>
<div className='iconText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
    </div>
  )
}

export default RecommendedIcons