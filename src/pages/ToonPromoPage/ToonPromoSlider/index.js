import React from "react";
import "./index.css"
import banner from "../../../img/banner.png"
import banner2 from "../../../img/banner2.png"

const ToonPromoSlider = () => {
    return (
        <div class="slider">
            <div class="slides">
                <div id="slides-0" class="slide">
                    <img class="slide-text" src={banner}/>
                    <a class="slide-prev" href="#slides-3" title="Next"></a>
                    <a class="slide-next" href="#slides-1" title="Next"></a>
                </div>
                <div id="slides-1" class="slide">
                    <img class="slide-text" src={banner2}/>
                    <a class="slide-prev" href="#slides-0" title="Next"></a>
                    <a class="slide-next" href="#slides-2" title="Next"></a>
                </div>
                <div id="slides-2" class="slide">
                    <img class="slide-text" src={banner}/>
                    <a class="slide-prev" href="#slides-1" title="Next"></a>
                    <a class="slide-next" href="#slides-3" title="Next"></a>
                </div>
                <div id="slides-3" class="slide">
                    <img class="slide-text" src={banner2}/>
                    <a class="slide-prev" href="#slides-2" title="Next"></a>
                    <a class="slide-next" href="#slides-0" title="Next"></a>
                </div>
            </div>
        </div>
    )
}

export default ToonPromoSlider