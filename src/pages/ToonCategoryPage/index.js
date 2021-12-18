import React from "react";
import "./index.css"
import love from "../../img/love.png"
import ToonCategoryBtn from "./ToonCategoryBtn";
import ToonCategoryWebtoonCard from "./ToonCategoryWebtoonCard";


const ToonCategoryPage = () => {

    return (
        <>
            <div class="main-content-min-category-container">
                <div class="main-content-min-category-title-container">
                    <h2 class="main-content-min-category-title">Category</h2>
                </div>
                <div class="main-content-min-category-btns-container">
                    <ToonCategoryBtn category={"Romance"}/>
                    <ToonCategoryBtn category={"Comic"}/>
                    <ToonCategoryBtn category={"Fantasy"}/>
                    <ToonCategoryBtn category={"Action"}/>
                    <ToonCategoryBtn category={"19+"}/>
                    <ToonCategoryBtn category={"BL/GL"}/>
                </div>
            </div>
            <div class="main-content-webtoon-list-container">
                <h2>#일상</h2>
                <ToonCategoryWebtoonCard image={love}/>
                <ToonCategoryWebtoonCard image={love}/>
                <ToonCategoryWebtoonCard image={love}/>
                <ToonCategoryWebtoonCard image={love}/>
                <ToonCategoryWebtoonCard image={love}/>
                <ToonCategoryWebtoonCard image={love}/>
            </div>
        </>
    )
}

export default ToonCategoryPage