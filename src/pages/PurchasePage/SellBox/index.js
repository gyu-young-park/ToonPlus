import React, { useState } from "react";
import "./index.css"

const SellBox = ({price, name, unit, unitPrice}) => {
    const [count, setCount] = useState(0)
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
                <strong>{name}</strong>
                <span>
                    <input type="number" value={price} />
                    <a href="#" class="purchase-plus" ><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus" ><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>토큰 개수</strong>
                <span>
                    <input type="number" value={count}/>
                    <a href="#" class="purchase-plus" onClick={onClickUpCount}><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus" onClick={onClickDownCount}><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>{unit}</strong>
                <span>
                    <input type="number" readonly value={count* unitPrice}/>
                </span>
            </div>
            <div class="main-content-purchase-btn-container">
                <strong>최소 판매금액 1, 수수료 0.020</strong>
                <span>
                    <button type="button">판매</button>
                </span>
            </div>
        </div>
    )
}

export default SellBox