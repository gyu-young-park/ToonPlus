import { random } from "lodash";
import React from "react";
import "./index.css"


const PurchaseToonTradeInfoUnit = ({time, price, unit, total, status}) => {
    return (
        <tr>
            <td>{time}</td>
            <td class={status}>{price}</td>
            <td>{unit}</td>
            <td>{total}</td>
        </tr>
    )
}

const PurchaseToonTradeInfo = () => {

    const returnMockData = (num=59) => {
        const ret = []
        for(let i = 1; i < num ; i++)
        {
            ret.push(
                {
                    time:`2021/12/16 11:25:${i}`,
                    unit:`${i}`,
                    price:i%2 === 0 ? `${6000 + i}` : `${6000 - i}`,
                    total: i%2 === 0 ? `${(6000 + i)*i}` : `${(6000 - i)*i}`,
                    status: i%2 === 0 ? "main-content-toon-info-cell": "main-content-toon-info-purchase"
                }
            )
        }
        return ret;
    }

    return(
        <table class="styled-table">
            <thead>
                <tr>
                    <th>체결시간</th>
                    <th>체결가격</th>
                    <th>체결량</th>
                    <th>체결총액</th>
                </tr>
            </thead>
            <tbody>
                {
                    returnMockData().map((value, index) => {
                        return <PurchaseToonTradeInfoUnit  
                                time={value.time}
                                unit={value.unit}
                                price={value.price}
                                total={value.total}
                                status={value.status}
                                key={index}/>
                    })
                }

            </tbody>
        </table>
    )
}

export default PurchaseToonTradeInfo