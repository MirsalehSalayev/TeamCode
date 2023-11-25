import React from 'react'
import "./index.scss"


function Navbar() {
    return (
        <header>
            <div id="headerTop">
                <div className="leftSide">
                    <img src="https://bookland.wprdx.com/demo/wp-content/themes/bookland/assets/images/logo-4.png" alt="" />
                </div>
                <div className="rightSide">
                    <div className="headerSearchPanel">
                        <select name="categories" id="categories">
                            <option value="choose">Choose Category</option>
                            <option value="IT">IT</option>
                            <option value="medicine">Medicine</option>
                            <option value="poem">Poem</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                        <div className="searchInput"> <input type="text" placeholder='Search Books Here' />
                            <div className="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="heart"><i class="fa-regular fa-heart"></i>
                            <span>0</span>
                        </div>
                        <div className="cart"><i class="fa-solid fa-cart-shopping"></i>
                            <span>0</span>
                        </div>
                        <div className="photo"><i class="fa-regular fa-user"></i></div>
                    </div>
                </div>
            </div>
            <nav id='navigation'>
                <div className="navCont">
                    <div className="links"><div className="home">Home <i class="fa-solid fa-chevron-down"></i>
                        <div className="dropDown">
                            <ul>
                                <li>Lorem.</li>
                                <li>Lorem.</li>
                                <li>Lorem.</li>
                                <li>Lorem.</li>
                            </ul></div></div>
                        <div className="pages">Pages <i class="fa-solid fa-chevron-down"></i>
                            <div className="dropDown">
                                <ul>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                </ul></div></div>
                        <div className="aboutUs"><a href="">About us</a></div>
                        <div className="shop">Shop <i class="fa-solid fa-chevron-down"></i>
                            <div className="dropDown">
                                <ul>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                </ul></div></div>
                        <div className="blog">Blog <i class="fa-solid fa-chevron-down"></i>
                            <div className="dropDown">
                                <ul>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                    <li>Lorem.</li>
                                </ul></div></div>
                        <div className="contactUs"><a href="">Contact us</a></div>
                    </div>
                    <div className="links">
                        <div className="getInTouch">

                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar