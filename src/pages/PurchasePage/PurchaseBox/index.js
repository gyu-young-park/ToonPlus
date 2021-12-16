import React from "react";
import "./index.css"

const PurchaseBox = () => {
    return(
        <div class="main-content-purchase-container">
            <div class="main-content-purchase-data-container">
                <strong>매수가격</strong>
                <span>
                    <input type="number"/>
                    <a href="#" class="purchase-plus"><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus"><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>주문수량</strong>
                <span>
                    <input type="number"/>
                    <a href="#" class="purchase-plus"><i class="fas fa-plus"></i></a>
                    <a href="#" class="purchase-minus"><i class="fas fa-minus"></i></a>
                </span>
            </div>
            <div class="main-content-purchase-data-container">
                <strong>주문총액</strong>
                <span>
                    <input type="number" readonly/>
                </span>
            </div>
            <div class="main-content-purchase-btn-container">
                <strong>최소 주문금액 1, 수수료 0.020</strong>
                <span>
                    <button type="button">찜하기</button>
                    <button type="button">구매</button>
                </span>
            </div>
        </div>
    )
}

export default PurchaseBox