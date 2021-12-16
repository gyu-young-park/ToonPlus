import React from "react";
import "./index.css"

const ToonCategoryBtn = ({category}) => {
    return (
        <div class="main-content-min-category-btn-container">
            <a class="main-content-min-category-btn">
                {category}
            </a>
        </div>
    )
}

export default ToonCategoryBtn