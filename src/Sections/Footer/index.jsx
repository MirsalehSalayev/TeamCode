import React from 'react'
import "./index.scss"

function Footer() {
    return (
        <footer>
            <div id="footerTop">
                <div className="leftSide">
                    <div className="footerBookLandImg">
                        <img src="https://bookland.wprdx.com/demo/wp-content/themes/bookland/assets/images/logo-white.png" alt="" />
                    </div>
                    <div className="footerBookLandText">
                        Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit
                    </div>
                    <div className="footerBookLandIcons">
                        <div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
                        <div className="icon"><i class="fa-brands fa-twitter"></i></div>
                        <div className="icon"><i class="fa-brands fa-linkedin"></i></div>
                        <div className="icon"><i class="fa-brands fa-instagram"></i></div>
                    </div>
                </div>
                <div className="rigthSide">
                    <div className="ourLinks">
                        <h2>Our Links</h2>
                        <ul>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="bookLand">
                        <h2>Bookland</h2>
                        <ul>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                        </ul></div>
                    <div className="resources">
                        <h2>Resources</h2>
                        <ul>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                            <li><span><i class="fa-solid fa-chevron-right"></i></span> Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="getInTouch">
                        <h2>Get in Touch With Us</h2>
                        <div className="location"></div>
                        <div className="phoneNumber"></div>
                        <div className="eMail"></div>
                    </div>
                </div>


            </div>
            <div className="footerBottom">
                <div className="rightsAreReserved">Bookland Book Store Ecommerce Website - © 2022 All Rights Reserved</div>
                <div className="madeWithLove">
                    Made with <i class="fa-solid fa-heart"> </i> by Group № 4
                </div>
            </div>
        </footer>
    )
}

export default Footer