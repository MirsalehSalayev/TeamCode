import React from 'react'
import RecommendedForYouCard from '../../Components/RecommendedForYouCard'
import "./_recommend.scss"
import RecommendedIcons from '../../Components/RecommendedIcons'

function RecomendedForYou() {
  return (
    <>
        <section id='recommendedForYou'>
            <div className='recomendedForYou'><h2 className='header'>Recomended For You</h2>
            <p className='headerText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don't look even slightly believable.</p>
<div className='cards'>
   <RecommendedForYouCard title = "Pushing Clouds" description = "$30.00" img = "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/e5927e87ecbec52ddfbc4a24d3eb056e-450x600.jpg" > </RecommendedForYouCard>
   <RecommendedForYouCard title = "Terrible Madness" description = "$50.00" img = "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/a7cbc9ec4f61f7713101612a45211ebb-450x600.jpg"></RecommendedForYouCard>
   <RecommendedForYouCard title = "REWORK" description = "$50.00" img = "https://bookland.wprdx.com/demo/wp-content/uploads/2022/11/image_2022_11_07T12_54_40_525Z-450x600.png"></RecommendedForYouCard>
   <RecommendedForYouCard title = "Thunder Stunt" description = "$16.00" img = "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/44bf1374c4230e2655135b2a68fc7ccf-450x600.jpg"></RecommendedForYouCard>
   <RecommendedForYouCard title = "Think" description = "$10.00" img = "https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/cover-450x600.png"></RecommendedForYouCard>

</div>
</div>
        </section>

        <section id='recomendedIcon'>
            <div className='icons'>
                <RecommendedIcons title = "Quick Delivery"/>
                <RecommendedIcons title = "Secure Payment"/>
                <RecommendedIcons title = "Best Quality"/>
                <RecommendedIcons title = "Return Guarantee"/>

            </div>
        </section>
        </>
  )
}

export default RecomendedForYou