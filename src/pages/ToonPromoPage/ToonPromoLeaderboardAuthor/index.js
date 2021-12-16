import React from "react";
import ToonPromoLeaderboardUnit from "../ToonPromoLeaderboardUnit";
import "./index.css"
import banana from "../../../img/banana.jpg"
import anonymous_girl from "../../../img/undraw_female_avatar_w3jk.png"
import anonymous_boy from "../../../img/undraw_male_avatar_323b.png"

const ToonPromoLeaderboardAuthor = () => {
    return(
        <article class="main-content-32-card leaderboard leaderboard-author">
            <header>
                <h1 class="leaderboard-title">
                    <span class="leaderboard-title-top">TOON Rank</span>
                    <span class="leaderboard-title-bottom">Author</span>
                </h1>
            </header>
            <main class="leaderboard-profiles">
                <ToonPromoLeaderboardUnit
                    image={banana}
                    name={"wanana"}
                    value={"63.2%"}
                    status={"UP"}
                />
                <ToonPromoLeaderboardUnit
                    image={anonymous_boy}
                    name={"anonymous male"}
                    value={"35.8%"}
                    status={"UP"}
                />
                <ToonPromoLeaderboardUnit
                    image={anonymous_girl}
                    name={"anonymous female"}
                    value={"12.5%"}
                    status={"UP"}
                />
            </main>
        </article>
    )
}

export default ToonPromoLeaderboardAuthor