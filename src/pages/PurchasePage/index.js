import React, { useEffect, useRef, useState } from"react"
import "./index.css"
import * as _ from 'lodash';
import bb, {candlestick} from 'billboard.js';
import SellBox from "./SellBox";
import PurchaseBox from "./PurchaseBox";
import PurchaseToonTradeInfo from "./PurchaseToonTradeInfo";
// import { Pool } from "@uniswap/v3-sdk";
import { ethers } from "ethers";
// import { Pool } from "@uniswap/v3-sdk";
// import { Token } from "@uniswap/sdk-core";
// import * as ABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
// const IUniswapV3PoolABI = ABI.abi
import axios from "axios"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import qs from 'qs'

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/5509e4f0fae347ac985feba7e03aa689");
const poolAddress = "0x4C4b47DA5601C8EFb946ac78df1DE4507cd3776B"
const poolImmutablesAbi = [
  "function factory() external view returns (address)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function fee() external view returns (uint24)",
  "function tickSpacing() external view returns (int24)",
  "function maxLiquidityPerTick() external view returns (uint128)",
];

// const poolContract = new ethers.Contract(
//   poolAddress,
//   IUniswapV3PoolABI,
//   provider
// );

// async function getPoolImmutables() {
//   const PoolImmutables = {
//     factory: await poolContract.factory(),
//     token0: await poolContract.token0(),
//     token1: await poolContract.token1(),
//     fee: await poolContract.fee(),
//     tickSpacing: await poolContract.tickSpacing(),
//     maxLiquidityPerTick: await poolContract.maxLiquidityPerTick(),
//   };
//   return PoolImmutables;
// }

const data =  [
	["TOON", 
  [1327, 1369, 1289, 1348],
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
    const [token0, setToken0] = useState("")
    const [token1, setToken1] = useState("")
    const [token0Price, setToken0Price] = useState(0)
    const [token1Price, setToken1Price] = useState(0)
    useEffect(() => {
      // getPoolImmutables().then((result) => {
      //   console.log(result);
      // });
        const query = `query($id : String!){
          pool(id : $id){
            tick
            token0 {
              symbol
              id
              decimals
            }
            token1 {
              symbol
              id
              decimals
            }
            token0Price
            token1Price
          }
        }`

        // const query = `query($id : String!){
        //   factory(id: $id){
        //     poolCount
        //     txCount
        //     totalVolumeUSD
        //     totalVolumeETH
        //   }
        // }`
        const client = new ApolloClient({
          uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
          cache: new InMemoryCache()
        });
        
        client
        .query({
          query: gql`
          {
            pool(id: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8") {
              tick
              token0 {
                symbol
                id
                decimals
              }
              token1 {
                symbol
                id
                decimals
              }
              token0Price
              token1Price
            }
          }
          `
        })
        .then(result => {
          console.log(result.data.pool)
          setToken0Price(result.data.pool.token0Price)
          setToken1Price(result.data.pool.token1Price)
          setToken0(result.data.pool.token0.symbol)
          setToken1(result.data.pool.token1.symbol)
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
        });
    }, [])

    useEffect(()=>{
      console.log(token0)
      console.log(token1)
    },[token0, token1])

    return(
        <>
            <div class="main-content-chart-news-container">
                <div class="main-content-chart-purchase-sell-container">
                    <div class="main-content-chart-container">
                        <h2>웹툰</h2>
                        <div class="main-content-char">
                            <div ref={toonPriceChart}></div>
                        </div>
                    </div>
                    <div class="main-content-purchase-sell-container">
                        <PurchaseBox price={token0Price} name={token0} unit={token1}/>
                        <SellBox price={token1Price} name={token1} unit={token0}/>
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