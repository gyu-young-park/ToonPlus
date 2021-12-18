import React from "react";
import "./index.css"
import {useNavigate} from "react-router-dom"
import love from "../../../img/love.png"
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
                        image={love}
                        name={"일상"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={love}
                        name={"로맨스"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={love}
                        name={"이세계"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={love}
                        name={"소년만화"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />
                <ToonPromoLeaderboardUnit
                        image={love}
                        name={"판타지"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />

                <ToonPromoLeaderboardUnit
                        image={love}
                        name={"BL"}
                        value={""}
                        status={""}
                        onclickHandler={onClickCategory}
                    />

                <ToonPromoLeaderboardUnit
                        image={love}
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