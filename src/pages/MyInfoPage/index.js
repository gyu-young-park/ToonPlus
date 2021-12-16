import React from "react";
import "./index.css"
import banana from "../../img/banana.jpg"
import onlylevelup from "../../img/onlylevelup.jpg"
import MyInfoDounutChart from "./MyInfoDounutChart";
import MyInfoContent from "./MyInfoContent";
import MyInfoWebtoonListCard from "./MyInfoWebtoonListCard";

const MyInfoPage = () => {
    return(
        <>
            <div class="main-content-mychart-myinfo-container">
                <div class="main-content-mychart-container">
                    <MyInfoDounutChart/>
                </div>
                <div class="main-content-myinfo-container">
                    <h2>내 정보</h2>
                    <MyInfoContent image={onlylevelup} />
                </div>
            </div>
            <div class="main-content-my-webtoon-list-container">
                <h2>보유토큰</h2>
                <MyInfoWebtoonListCard image={banana} status={"my-ice-loss"} />
                <MyInfoWebtoonListCard image={banana} status={"my-worm-gain"} />
            </div>
        </>
    )
}

export default MyInfoPage