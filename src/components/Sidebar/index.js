import React from "react";
import { Link } from "react-router-dom"
import "./index.css"
const Sidebar = () => {
    return (
        <aside class="sidebar-container">
            <div class="sidebar-info-container">
                <span class="sidebar-info-name">
                    My Tune: 
                </span>
                <span class="sidebar-info-content">30 <i class="fas fa-coins"></i> </span>
            </div>
            <div class="sidebar-content-container">
                <Link to="promo" class="sidebar-content">
                    <span>Buy</span>
                    <i class="fas fa-hand-holding-usd"></i>
                </Link>
            </div>
            <div class="sidebar-content-container">
                <Link to="nft" class="sidebar-content">
                    <span>NFT</span>
                    <i class="fas fa-wallet"></i>
                </Link>
            </div>
            <div class="sidebar-content-container">
                <Link to="nft-send" class="sidebar-content">
                    <span>NFT Send</span>
                    <i class="fas fa-sync-alt"></i>
                </Link>
            </div>
            <div class="sidebar-content-container">
                <Link to="my-info" class="sidebar-content">
                    <span>My info</span>
                    <i class="far fa-user"></i>
                </Link>
            </div>
            <div class="sidebar-content-container">
                <Link to="#" class="sidebar-content">
                    <span>Setting</span>
                    <i class="fas fa-cog"></i>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar