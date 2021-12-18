import React, { useState } from "react";
import "./index.css"
import axios from "axios"
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
const keyring = {
    "0x49375E0c627269368328c1213d3DB5F75ab9f26A": "0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c",
    "0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7": "0x22aa7c8ef0078aea21e16b0d568ddd938738a2ef49c19d125f30be46ff0967cd"
}

const PurchaseBox = ({price, name, unit, unitPrice}) => {
    const [count, setCount] = useState(0)

    const onClickUpCount = (e) => {
        e.preventDefault()
        setCount(count+1)
    }

    const onClickDownCount = (e) => {
        e.preventDefault()
        if(count - 1 < 0) return;
        setCount(count-1)
    }

    const onClickBuyButton = (e) => {
        e.preventDefault()
        const tokenData = {
            contractAddr: "0x90D2001a51F6Ee9fe4574816D28c2DA4C6c44011",
            fromAddr: "0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7",
            fromPk: keyring["0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7"],
            toAddr: "0x49375E0c627269368328c1213d3DB5F75ab9f26A",
            toPk: keyring["0x49375E0c627269368328c1213d3DB5F75ab9f26A"],
            amount: 1,
            wei: 3000
        }
        
        axios.post('http://localhost:10000/token/trade/transfer',tokenData
        ).then(res => {
            console.log(res)
            ToastsStore.success("Toon 보내기에 성공하셨습니다. TransactionHash: " + res.data.data.transactionHash);
        })
    }
    return(
        <div class="main-content-purchase-container">
            <ToastsContainer store={ToastsStore}  position={ToastsContainerPosition.TOP_CENTER} lightBackground/>
            <div class="main-content-purchase-data-container">
                <strong>{name}</strong>
                <span>
                    <input type="number" value={price}/>
                    <a href="#" class="purchase-plus"><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus"><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>토큰 개수</strong>
                <span>
                    <input type="number" value={count}/>
                    <a href="#" class="purchase-plus" onClick={onClickUpCount}><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus" onClick={onClickDownCount} ><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>{unit}</strong>
                <span>
                    <input type="number" readonly value={count * unitPrice}/>
                </span>
            </div>
            <div class="main-content-purchase-btn-container">
                <strong>최소 주문금액 1, 수수료 0.020</strong>
                <span>
                    <button type="button">찜하기</button>
                    <button type="button" onClick={onClickBuyButton}>구매</button>
                </span>
            </div>
        </div>
    )
}

export default PurchaseBox