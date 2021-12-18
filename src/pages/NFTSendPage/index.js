import React, { useState } from "react";
import "./index.css"
import axios from "axios";
import Web3 from 'web3'
const NFTSendPage = () => {
    const [transferContract, setTransferContract] = useState()
    const [reciverContract, setReceiverContract] = useState()
    const [nftContract, setNftContract] = useState()
    const [tokenId, setTokenId] = useState()
    
    const sendNft = (e) => {
        e.preventDefault()
        
        // const ERC721CONTRACT = new web3.eth.Contract(erc721ABI,contractAddr);
        // ERC721CONTRACT.methods.approve(senderAddr, tknId).send({from : senderAddr});

        const nftData = {
            contractAddr: nftContract,
            fromAddr: transferContract,
            toAddr: reciverContract,
            tokenId: tokenId
        }
        axios.post('http://localhost:10000/nft/trade/transfer', {
            params: {
                body: nftData
            }
        }).then(res => {
            console.log(res);
        })
    }
    return (
        <div class="main-content-ntf-send-main-container">
            <form class="main-content-nft-send-main-form">
                <h1>   </h1>
                <div class="question">
                    <input type="text" onClick={(e) => setTransferContract(e.target.value)} required/>
                    <label>보내는 이</label>
                </div>
                <div class="question">
                    <input type="text" onClick={(e) => setReceiverContract(e.target.value)} required/>
                    <label>받는 이</label>
                </div>
                <div class="question">
                    <input type="text" onClick={(e) => setNftContract(e.target.value)} required/>
                    <label>NFT Address</label>
                </div>
                <div class="question">
                    <input type="text" onClick={(e) => setTokenId(e.target.value)} required/>
                    <label>NFT Id</label>
                </div>
                <button onClick={sendNft}>Submit</button>
            </form>
        </div>
    )
}

export default NFTSendPage
