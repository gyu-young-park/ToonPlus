import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CounterContainer from './components/CounterContainer';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import NFTpage from "./pages/NFTpage"
import MainPage from './pages/MainPage';
import ToonPromoPage from './pages/ToonPromoPage';
import ToonCategoryPage from './pages/ToonCategoryPage';
import PurchasePage from './pages/PurchasePage';
import MyInfoPage from './pages/MyInfoPage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
function App() {
  const { authStatus } = useSelector(state => ({
    authStatus: state.login.authStatus,
  }));

  useEffect(()=>{
    console.log(authStatus)
  }, [authStatus])
  return (
    <Router>
      {authStatus ? 
      <>
        <Header/>
        <div class="main-container">
          <Sidebar/>
          <main class="main-content-container">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/nft" element={<NFTpage/>}/>
              <Route path="/promo" element={<ToonPromoPage/>}/>
              <Route path="/category" element={<ToonCategoryPage/>}/>
              <Route path="/buy" element={<PurchasePage/>}/>
              <Route path="/my-info" element={<MyInfoPage/>}/>
              <Route path="/count" element={<CounterContainer/>}/>
            </Routes>
          </main>
        </div> 
      </>
      : <LoginPage/>
      }
    </Router>
  );
}

export default App;
