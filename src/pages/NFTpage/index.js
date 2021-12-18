import React, { useEffect, useState } from "react";
import "./index.css"
import love from "../../img/love.png"
import NFTCard from "./NFTCard";
import axios from "axios"
const NFTpage = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get("http://localhost:10000/nft/look-up/all").then((res)=>{
            setData(res.data)
        })
    },[])

    return(
        <>
            <h2>MY NFT</h2>
            <div class="main-content-nft-container">
                <NFTCard image={love}/>
            </div>
        </>
    )
}

export default NFTpage