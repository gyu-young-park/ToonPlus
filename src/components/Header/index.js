import React from "react";
import "./index.css"
import {Link} from "react-router-dom"
import toonlogo from "../../img/Toon+.png"

const Header = () => {
    return(
        <header class="header-container">
            <div class="header-logo-container">
                <Link to="/"><img src={toonlogo} alt=""/></Link>
            </div>
            <div class="header-search-content-container">
                <div class="header-search-container">
                    <i class="fas fa-search"></i>
                    <input type="text" class="header-search-input"/>
                </div>
                <div class="header-content-container">
                    <div class="header-content">
                        <a href="">
                            <span>Docs</span>
                        </a>
                    </div>
                    <div class="header-content">
                        <a href="">
                            <span>Alarm</span>
                        </a>
                    </div>
                    <div class="header-content">
                        <a href="">
                            <span>Blog</span>
                        </a>
                    </div>
                    <div class="header-content">
                        <a href="">
                            <span>logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header