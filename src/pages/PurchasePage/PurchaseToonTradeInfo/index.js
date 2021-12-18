import { random } from "lodash";
import React from "react";
import "./index.css"


const PurchaseToonTradeInfoUnit = ({time, price, unit, total, status}) => {
    return (
        <tr>
            <td>{time}</td>
            <td>{unit}</td>
        </tr>
    )
}

const PurchaseToonTradeInfo = () => {
    const transactionList = ['0xD40Ebb14A61B7d5691246a6437EeaC5ac7cE4D7e', '0x9E2482ca87861cb5a2Aaf3F5B36BFdB02603be84',
    '0x856f1c544c06cd31438bde11cfc73fa877ba1a5d','0x49375E0c627269368328c1213d3DB5F75ab9f26A',
    '0x6D1f48e308aAEeD0E319D02F1e3e629a0166f03F','0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7',
    '0xa36085f69e2889c224210f603d836748e7dc0088','0x9E2482ca87861cb5a2Aaf3F5B36BFdB02603be84',
    '0x0ca741f490521478AbBA9c3b1A71BAe1123d0fd7','0x6a15bd0445e00b1705e0f02ad2e60902c1cbcc3e',
    '0x8bd7e488720175707648efddbc8f796ac586989a','0xD40Ebb14A61B7d5691246a6437EeaC5ac7cE4D7e',
    '0x50d30bb7c64fb5d8dbca332541133c86eb0232a8','0xa40342366d0833fc89cb7bf4238178b26af7623c']
    const returnMockData = (num=59) => {
        const ret = []
        for(let i = 1; i < transactionList.length ; i++)
        {
            ret.push(
                {
                    time:`2021/12/18 23:00:${i}`,
                    unit: transactionList[i],
                }
            )
        }
        return ret;
    }

    return(
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Transaction</th>
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