import React from "react";
import "./index.css"

const MyInfoContent = ({image}) => {
    return(
        <>
            <div class="main-content-myinfo-token-container">
                <div class="main-content-myinfo">
                    <img class="main-content-myinfo-img" src={image}/>
                    <h1>찌그렁 개발자</h1>
                    <h2>총 2개의 튠에 투자 중 입니다!</h2>
                </div>
                <div class="main-content-myinfo-token">
                    <div class="main-content-myinfo-token-contents">
                        <div class="main-content-myinfo-token-content-container">
                            <h2>내 보유자산</h2>
                            <div class="main-content-myinfo-token-content">
                                <h2>보유 klay:</h2>
                                <h2>0</h2>
                            </div>        
                            <div class="main-content-myinfo-token-content">
                                <h2>총매수:</h2>
                                <h2>1,660,121</h2>
                            </div>
                            <div class="main-content-myinfo-token-content">
                                <h2>총평가:</h2>
                                <h2>2,170,914</h2>
                            </div>
                        </div>
                        <div class="main-content-myinfo-token-content-container">
                            <div class="main-content-myinfo-token-content">
                                <h2>총 보유자산:</h2>
                                <h2>2,170,914</h2>
                            </div>
                            <div class="main-content-myinfo-token-content">
                                <h2>평가손익</h2>
                                <h2 id="token-gain">+511,559</h2>
                            </div>
                            <div class="main-content-myinfo-token-content">
                                <h2>수익률</h2>
                                <h2 id="token-gain-percent">+23.51%</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInfoContent