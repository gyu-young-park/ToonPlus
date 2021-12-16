import React from "react";
import "./index.css"
import {useNavigate} from "react-router-dom"
import banana from "../../../img/banana.jpg"
import romance from "../../../img/romance.webp"
import bl from "../../../img/bl.webp"
import fantasy from "../../../img/fantasy.png"
import sexy from "../../../img/sexy.webp"
import man from "../../../img/man.webp"
import onlylevelup from "../../../img/onlylevelup.jpg"
import ToonPromoLeaderboardUnit from "../ToonPromoLeaderboardUnit";
const ToonPromoLeaderboardCategory = () => {
    
    const history = useNavigate()
    const onClickCategory = () => {
        history('/category')
    }

    return (
        <article class="main-content-32-card leaderboard leaderboard-category">
            <header>
                <h1 class="leaderboard-title">
                    <span class="leaderboard-title-top">Category</span>
                    <span class="leaderboard-title-bottom">Webtoon</span>
                </h1>
            </header>
            
            <main class="leaderboard-profiles">
                <ToonPromoLeaderboardUnit
                        image={banana}
                        name={"일상"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={romance}
                        name={"로맨스"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={onlylevelup}
                        name={"이세계"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={man}
                        name={"소년만화"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={fantasy}
                        name={"판타지"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />

                <ToonPromoLeaderboardUnit
                        image={bl}
                        name={"BL"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />

                <ToonPromoLeaderboardUnit
                        image={sexy}
                        name={"19+"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
            </main>
        </article>
    )
}

export default ToonPromoLeaderboardCategory