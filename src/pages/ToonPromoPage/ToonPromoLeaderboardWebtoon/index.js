import React from "react";
import ToonPromoLeaderboardUnit from "../ToonPromoLeaderboardUnit";
import "./index.css"
import onlylevelup from "../../../img/onlylevelup.jpg"

const ToonPromoLeaderBoardWebtoon = () => {
    return(
        <article class="main-content-32-card leaderboard leaderboard-webtoon">
            <header>
                <h1 class="leaderboard-title">
                    <span class="leaderboard-title-top">TOON Rank</span>
                    <span class="leaderboard-title-bottom">Webtoon</span>
                </h1>
            </header>
            
            <main class="leaderboard-profiles">
                <ToonPromoLeaderboardUnit
                        image={onlylevelup}
                        name={"banana"}
                        value={"45.2%"}
                        status={"UP"}
                    />
            </main>
        </article>
)
}

export default ToonPromoLeaderBoardWebtoon