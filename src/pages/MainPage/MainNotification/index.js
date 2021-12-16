import React from "react";
import "./index.css"
import bittree from '../../../img/undraw_Crypto_flowers_re_dyqo.png'

const MainNotification = () => {
    return (
        <>
            <div class="main-content-notification-welcome-panel-description-container">
                <h1 class="main-content-notification-welcome-panel-description-title">Hello! GYU! Welcome Toon World!</h1>
                <div class="main-content-notification-welcome-panel-description-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus suscipit similique quo accusamus eaque quaerat, 
                    eligendi sapiente eveniet eum? Atque fugiat dolore commodi 
                    dolorum facere earum maiores numquam sequi perspiciatis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
                    itaque molestiae asperiores fugit autem quam doloribus 
                    cum perferendis distinctio! Nisi earum aut impedit quam incidunt 
                    illo magnam nulla at quos.
                </div>
                <div class="main-content-notification-welcome-panel-description-btn-container">
                    <button class="main-content-btn-style main-content-notification-welcome-panel-description-btn">+ tip</button>
                    <button class="main-content-btn-style main-content-notification-welcome-panel-description-btn">+ how to use?</button>
                </div>
            </div>
            <div class="main-content-notification-welcome-panel-image-container">
                <img class="main-content-notification-welcome-panel-image" src={bittree} alt=""/>
            </div>
        </>
    )
}

export default MainNotification