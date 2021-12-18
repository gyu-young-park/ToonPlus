import React from "react";
import "./index.css"
import anonymous_female from '../../img/undraw_female_avatar_w3jk.png'
import anonymous_male from '../../img/undraw_male_avatar_323b.png'
import love from '../../img/love.png'
import MainNotification from "./MainNotification";
import MainInterviewCard from "./MainInterviewCard";
import MainHotWebToonListCard from "./MainHotWebToonListCard";

const MainPage = () => {
    return ( 
        <>
            <div class="main-content-card main-content-notification-welcome-panel-container">
                <MainNotification/>
            </div>
            <div class="main-content-interview-card-container">
                <MainInterviewCard image={anonymous_female}/>
                <MainInterviewCard image={anonymous_male}/>
                <MainInterviewCard image={anonymous_male}/>
            </div>
            <div class="main-content-card main-content-hot-webtoon-list-container">
                <MainHotWebToonListCard image={love}/>
                <MainHotWebToonListCard image={love}/>
                <MainHotWebToonListCard image={love}/>
                <MainHotWebToonListCard image={love}/>
            </div>
        </>
    )
}

export default MainPage