import React from "react";
import "./index.css"

const MainHotWebToonListCard = ({image}) => {
    return(
        <>
            <div class="main-content-hot-webtoon-list-card-container">
                <div class="main-content-hot-weboot-list-card-img-container">
                    <img class="main-content-hot-weboot-list-card-img" src={image} alt=""/>
                </div>
                <div class="main-content-hot-webtoon-list-card-description-container">
                    <h1 class="main-content-hot-webtoon-list-card-title">Title</h1>
                    <span class="main-content-hot-webtoon-list-card-description">
                        hello, my name is gyuewewewew
                    </span>
                </div>
                <div class="main-content-hot-webtoon-list-card-btn-container">
                    <button class="main-content-hot-webtoon-list-card-btn main-content-btn-style main-content-hot-webtoon-list-card-btn-show">
                        Read!
                    </button>
                    <button class="main-content-hot-webtoon-list-card-btn main-content-btn-style main-content-hot-webtoon-list-card-btn-buy">
                        Buy!
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainHotWebToonListCard