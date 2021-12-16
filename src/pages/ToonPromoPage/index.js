import React from "react";
import "./index.css"
import ToonPromoSlider from "./ToonPromoSlider";
import ToonPromoLeaderboardAuthor from "./ToonPromoLeaderboardAuthor";
import ToonPromoLeaderBoardWebtoon from "./ToonPromoLeaderboardWebtoon";
import ToonPromoLeaderboardCategory from "./ToonPromotLeaderboardCategory";

const ToonPromoPage = () => {
    return(
        <>
            <div class="main-content-promo-container">
                <ToonPromoSlider/>
            </div>
            <div class="main-content-rank-catergory-container">
                <ToonPromoLeaderboardAuthor/>
                <ToonPromoLeaderBoardWebtoon/>
                <ToonPromoLeaderboardCategory/>
            </div>
        </>
    )
}

export default ToonPromoPage