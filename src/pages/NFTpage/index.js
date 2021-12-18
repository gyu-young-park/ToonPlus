import React, { useEffect, useState } from "react";
import "./index.css"
import love from "../../img/love.png"
import NFTCard from "./NFTCard";
import axios from "axios"
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
const proxy = "https://gateway.pinata.cloud/ipfs/"
const NFTpage = () => {
    const [image, setImage] = useState(null)
    const [transaction, setTransaction] = useState(null)

    useEffect(()=>{
        const data = {
            contractAddr: "0x6D1f48e308aAEeD0E319D02F1e3e629a0166f03F",
            addr: "0x49375E0c627269368328c1213d3DB5F75ab9f26A",
            tokenId: 2
        }
        axios.post("http://localhost:10000/nft/look-up/img", data).then((res)=>{
            console.log(res)
            if(res.data.status == 200)
            {
                setImage(proxy + res.data.data)
                var re = /\s*(?:;|$)\s*/;
                const transaction = res.config.data.split("contractAddr")[1].split("\"")[2]
                setTransaction(transaction)
                ToastsStore.success("NFT 가져오기에 성공하셨습니다.");
            }
        })
    },[])

    return(
        <>
            <h2>MY NFT</h2>
            <ToastsContainer store={ToastsStore}  position={ToastsContainerPosition.TOP_CENTER} lightBackground/>
            <div class="main-content-nft-container">
                {image === null ? <></> : <NFTCard image={image} transaction={transaction}/>}
            </div>
        </>
    )
}

export default NFTpage