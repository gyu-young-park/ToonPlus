import React from "react";
import "./index.css"
import banana from "../../img/banana.jpg"
import NFTCard from "./NFTCard";

const NFTpage = () => {
    return(
        <>
            <h2>MY NFT</h2>
            <div class="main-content-nft-container">
                <NFTCard image={banana}/>
            </div>
        </>
    )
}

export default NFTpage