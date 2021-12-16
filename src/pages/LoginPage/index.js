import React, { useState } from "react";
import "./index.css"
import { useDispatch } from "react-redux"
import { setLogin } from '../../_redux/login'
const LoginPage = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState(null)

    const onChangePasswordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(password)
    }

    const onClickLoginBtnHandler = (e) => {
        e.preventDefault();
        //todo auth
        dispatch(setLogin())
    }

    const onClickOpenFileSystemHandler = (e) => {
        e.preventDefault()
        
    }
    return (
        <div className="login-page-container">
            <div class="login-form-right-side">
                <div class="top-logo-wrap">
                    
                </div>
                <h1>How does a login system work?</h1>
                <p>저희는 Klaytn계정을 이용하여 로그인하여 더욱 안전하게 계정을 보호합니다. </p>
            </div>
            <div class="login-form-left-side">
                <div class="login-top-wrap">
                    <span>Don't have an account?</span>
                    <button class="create-account-btn shadow-light">Create Profile</button>
                </div>
                <div class="login-input-container">
                    <div class="login-input-wrap input-password">
                        <i class="fas fa-key"></i>
                        <input onChange={onChangePasswordHandler} value={password} placeholder="Password"  type="password"/>
                    </div>
                </div>
                <div class="login-btn-wrap">
                    <button onClick={onClickLoginBtnHandler} class="login-btn">Login</button>
                    <a href="#" onClick={onClickOpenFileSystemHandler}>File System으로 열기</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage