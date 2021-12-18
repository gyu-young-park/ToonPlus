import React from "react";
import "./index.css"

const NFTCard = ({image}) => {
    return(
        <>
            <figure class="movie">
                <div class="movie__hero">
                    <img src={image} alt="nft_image" class="movie__img"/>
                </div>
                <div class="movie__content">
                    <div class="movie__title">
                    <h1 class="heading__primary">슬픈 망나니의 자화상 <i class="fas fa-fire"></i></h1>
                    <div class="movie__tag movie__tag--1">#action</div>
                    <div class="movie__tag movie__tag--2">#thriller</div>
                    </div>
                    <p class="movie__description">
                    희동윤이 그린 첫번째 웹툰으로 슬픈 자화상을 하고있는 얼굴이다. 세상에 단 하나밖에 존재하지 않는 해당 자화상은 현대인의 슬픔을 표현한다.
                    </p>
                    <div class="movie__details">
                    <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>Buzz
                        Yoon
                    </p>
                    <p class="movie__detail">
                        <span class="icons icons-grey"><i class="fas fa-clock"></i> 
                        </span>2021 12/15 12 32
                    </p>
                    <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
                        </span>231 klay</p>
                    </div>
                </div>
                <div class="movie__price">231 klay</div>
            </figure>
        </>
    )
}

export default NFTCard