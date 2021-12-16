import React from "react";
import "./index.css"

const ToonPromoLeaderboardUnit = ({image, name, value, status, onclickHandler}) => {
    return (
        <article class="leaderboard-profile" onClick={onclickHandler}>
            <img src={image} alt="Mark Zuckerberg" class="leaderboard-picture"/>
            <span class="leaderboard-name">{name}</span>
            <span class="leaderboard-value">
                {value}<span>{status}</span>
            </span>
        </article>
    )
}

export default ToonPromoLeaderboardUnit