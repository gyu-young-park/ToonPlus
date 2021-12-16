import React, { useEffect, useRef } from "react";
import "./index.css"
import * as _ from 'lodash';
import bb, {donut} from 'billboard.js';

const MyInfoDounutChart = () => {
    const tokenDounutChart = useRef(null);
    const nftDounutChart = useRef(null);

    useEffect(()=>{
        bb.generate({
            data: {
                columns: [
                ["banana", 30],
                ["sounds of mind", 120]
                ],
                type: donut(), // for ESM specify as: donut()
            },
            donut: {
                title: "보유 현황"
            },
            bindto: tokenDounutChart.current,
            size: {
                height:200,
                width: 300
            }
        });
    
        bb.generate({
            data: {
                columns: [
                ["hello", 1],
                ["soundsofmind", 1]
                ],
                type: donut(), // for ESM specify as: donut()
            },
            donut: {
                title: "보유 NFT",
                label: {
                    format: function(value, ratio, id) {		return value +"\개";       }
                }
            },
            bindto: nftDounutChart.current,
            size: {
                height:200,
                width: 300
            },
        });
    })

    return(
        <>
            <h2>보유 자산 포트폴리오</h2>
                <div class="main-content-mychars">
                    <div class="main-content-mychart">
                        <div ref={tokenDounutChart} id="donutChart"></div>
                    </div>
                    <div class="main-content-mychart">
                        <div ref={nftDounutChart} id="donutChart2"></div>
                    </div>
                </div>
        </>
    )
}

export default MyInfoDounutChart