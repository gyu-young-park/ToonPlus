import React from "react";
import "./index.css"

const MainInterviewCard = ({image}) => {
    return(
        <>
            <div class="main-content-card main-content-interview-card">
                <img class="main-content-interciew-card-img" src={image} alt=""/>
                <div class="main-content-interview-card-description-container">
                    <h1 class="main-content-interview-card-title">Title</h1>
                    <div class="main-content-interview-card-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainInterviewCard