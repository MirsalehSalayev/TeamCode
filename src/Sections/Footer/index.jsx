import React from 'react'
import "./index.scss"

function Footer() {
    return (
        <footer>
            <div id="footerNav">
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

            </div>
        </footer>
    )
}

export default Footer