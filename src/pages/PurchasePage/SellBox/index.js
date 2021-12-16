import React, { useState } from "react";
import "./index.css"

const SellBox = () => {
    const [price, setPrice] = useState(6000)
    const [count, setCount] = useState(0)

    const onClickUpPrice = (e) =>{
        e.preventDefault()
        setPrice(price + 10)
    }

    const onClickDownPrice = (e) =>{
        e.preventDefault()
        if(price - 10 <= 0) return
        setPrice(price - 10)
    }
    const onClickUpCount = (e) => {
        e.preventDefault()
        setCount(count+1)
    }

    const onClickDownCount = (e) => {
        e.preventDefault()
        if(count - 1 < 0) return
        setCount(count-1)
    }

    return(
        <div class="main-content-sell-container">
            <div class="main-content-purchase-data-container">
                <strong>매도가격</strong>
                <span>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <a href="#" class="purchase-plus" onClick={onClickUpPrice}><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus" onClick={onClickDownPrice}><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>매도수량</strong>
                <span>
                    <input type="number" value={count}/>
                    <a href="#" class="purchase-plus" onClick={onClickUpCount}><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus" onClick={onClickDownCount}><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>판매총액</strong>
                <span>
                    <input type="number" readonly value={count * price}/>
                </span>
            </div>
            <div class="main-content-purchase-btn-container">
                <strong>최소 판매금액 1, 수수료 0.020</strong>
                <span>
                    <button type="button">구매</button>
                </span>
            </div>
        </div>
    )
}

export default SellBox