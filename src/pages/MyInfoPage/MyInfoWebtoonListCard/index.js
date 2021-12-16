import React from "react";
import "./index.css"

const MyInfoWebtoonListCard = ({image, status}) => {
    return(
        <>
            <div class="card-my">
                <img class="card-image-my" src={image}/>
                <div class="card-text-my">
                    <span class="date">+1.2%</span>
                    <h2>Banana</h2>
                    <p>wanana</p>
                    <h1>내 수익률 -234%</h1>
                </div>
                <div class={`card-stats-my ${status}`}>
                    <div class="stat-my">
                        <div class="value">현재 5123 Klay</div>
                        <div class="type"></div>
                    </div>
                    <div class="stat-my border">
                        <div class="value">구매 3142 Klay</div>
                        <div class="type"></div>
                    </div>
                    <div class="stat-my">
                        <div class="value">보유토큰 32</div>
                        <div class="type"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInfoWebtoonListCard