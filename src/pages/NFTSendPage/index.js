import React, { useState } from "react";
import "./index.css"
import axios from "axios";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
const keyring = {
    "0x49375E0c627269368328c1213d3DB5F75ab9f26A": "0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c",
    "0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7": "0x22aa7c8ef0078aea21e16b0d568ddd938738a2ef49c19d125f30be46ff0967cd"
}
const NFTSendPage = () => {
    const [transferContract, setTransferContract] = useState("")
    const [reciverContract, setReceiverContract] = useState("")
    const [nftContract, setNftContract] = useState("")
    const [tokenId, setTokenId] = useState("")

    const sendNft = (e) => {
        e.preventDefault()
    
        const nftData = {
            contractAddr: nftContract,
            fromAddr: transferContract,
            toAddr: reciverContract,
            fromPk: keyring[transferContract],
            tokenId: tokenId
        }
        console.log(nftData)
        axios.post('http://localhost:10000/nft/trade/transfer',nftData
        ).then(res => {
            console.log(res)
            ToastsStore.success("NFT 보내기에 성공하셨습니다. TransactionHash: " + res.data.data.transactionHash);
        })
    }
    return (
        <>
            <ToastsContainer store={ToastsStore}  position={ToastsContainerPosition.TOP_CENTER} lightBackground/>
            <div class="main-content-ntf-send-main-container">
                <form class="main-content-nft-send-main-form">
                    <h1>   </h1>
                    <div class="question">
                        <label>보내는 이</label>
                        <input type="text" value={transferContract} onChange={(e) => setTransferContract(e.target.value)} required/>
                    </div>
                    <div class="question">
                        <label>받는 이</label>
                        <input type="text" value={reciverContract} onChange={(e) => setReceiverContract(e.target.value)} required/>
                    </div>
                    <div class="question">
                        <label>NFT Address</label>
                        <input type="text" value={nftContract} onChange={(e) => {
                            console.log(e.target.value)
                            setNftContract(e.target.value)}} required/>
                    </div>
                    <div class="question">
                        <label>NFT Id</label>
                        <input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required/>
                    </div>
                    <button onClick={sendNft}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default NFTSendPage
