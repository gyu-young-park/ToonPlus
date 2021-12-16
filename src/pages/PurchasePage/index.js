import React, { useEffect, useRef } from"react"
import "./index.css"
import * as _ from 'lodash';
import bb, {candlestick} from 'billboard.js';
import SellBox from "./SellBox";
import PurchaseBox from "./PurchaseBox";
import PurchaseToonTradeInfo from "./PurchaseToonTradeInfo";

const data =  [
	["Banana", [1327, 1369, 1289, 1348],
	[1348, 1371, 1314, 1320],
	[1320, 1412, 1314, 1394],
	[1394, 1458, 1393, 1453],
	[1453, 1501, 1448, 1500],
	[1500, 1510, 1492, 1496],
	[1496, 1496, 1448, 1448],
    [1434, 1421, 1401, 1434],
	[1448, 1490, 1433, 1490],
	[1490, 1544, 1490, 1537],
	[1537, 1563, 1534, 1544],
	[1544, 1550, 1511, 1525],
	[1525, 1609, 1517, 1604],
	[1604, 1614, 1585, 1592],
	[1592, 1632, 1586, 1620],
	[1620, 1633, 1609, 1622],
	[1622, 1697, 1620, 1687],
	[1687, 1691, 1624, 1648],
	[1648, 1689, 1640, 1671],
    [1702, 1711, 1723, 1733],
    [1745, 1757, 1770, 1782],
    [1750, 1732, 1700, 1689],
	[1671, 1702, 1671, 1695],
	[1695, 1727, 1689, 1724],
	[1724, 1733, 1691, 1696],
	[1696, 1733, 1696, 1731],
	[1731, 1756, 1716, 1748],
	[1748, 1769, 1734, 1762],
	[1762, 1792, 1752, 1778],
	[1778, 1783, 1763, 1769],
	[1769, 1791, 1740, 1755],
	[1755, 1755, 1711, 1725],
	[1725, 1739, 1683, 1701],
	[1701, 1731, 1694, 1730],
	[1730, 1739, 1703, 1715],
	[1715, 1745, 1710, 1731],
	[1731, 1732, 1643, 1643],
	[1643, 1662, 1608, 1615],
	[1615, 1667, 1615, 1665],
	[1665, 1689, 1663, 1671],
	[1671, 1671, 1587, 1588],
	[1588, 1599, 1521, 1533],
	[1533, 1554, 1476, 1490],
	[1490, 1494, 1432, 1443]
]]

const PurchasePage = () => {
    const toonPriceChart = useRef(null)

    useEffect(() => {
        bb.generate({
            data: {
              columns: data,
              type: candlestick(), // for ESM specify as: candlestick()
              colors: {
                Banana: "green"
              },
              labels: true
            },
            candlestick: {
              color: {
                down: "red"
              },
              width: {
                ratio: 0.8
              }
            },
            axis: {
              x: {
                padding: {
                  left: 1,
                  right: 1
                }
              }
            },
            bindto: toonPriceChart.current,
            size: {
                height: 450
            }
          });
    }, [])

    return(
        <>
            <div class="main-content-chart-news-container">
                <div class="main-content-chart-purchase-sell-container">
                    <div class="main-content-chart-container">
                        <h2>바나나툰</h2>
                        <div class="main-content-char">
                            <div ref={toonPriceChart}></div>
                        </div>
                    </div>
                    <div class="main-content-purchase-sell-container">
                        <PurchaseBox/>
                        <SellBox/>
                    </div>
                </div>
                <div class="main-content-toon-info-container">
                    <PurchaseToonTradeInfo/>
                </div>
            </div>
        </>
    )
}

export default PurchasePage