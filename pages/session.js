import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const login = () => {


    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)

    const toggleLogin = () => {
        setLogin(!login)
    }

    const toggleSignup = () => {
        setSignup(!signup)
    }

    return (
        <div className="container">
            <section>
                <div className="content_login_register">
                    <h1>Welcome to Art Auction</h1>
                    <p>login to enjoy our services</p>
            
                    <button className="close" onClick={() => { login ? toggleLogin() : toggleSignup() }}></button>
                    
                    <div className="buttons">
                        <button className="login" onClick={() => toggleLogin()}>Login</button>
                        <button className="signup" onClick={() => toggleSignup()}>Sign Up</button>
                    </div>

                    <div className="forms">
                        <Login login={login}/>
                        <Signup signup={signup}/>
                    </div>
                </div>
            </section>
            <div className="img">
                <h2>Art Auction</h2>
            </div>

            <style jsx>{`

                .container {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    height: 100vh;
                }

                section {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                .content_login_register {
                    display: grid;
                    justify-items: center;
                }

                h2 {
                    color: white;
                    font-size: 40px;
                    font-weight: 600;
                    text-align: right;
                }

                h1 {
                    font-size: 25px;
                    font-weight: 700;
                }

                p {
                    margin: 80px 0;
                }

                .buttons {
                    display: grid;
                    justify-items: center;
                    visibility: ${login || signup ? "hidden" : "visible"};
                    height: ${login || signup ? "0" : "110px"};
                    opacity: ${login || signup ? "0" : "1"};
                    transition: visibility .5s, height .5s, opacity .5s;
                }

                .buttons button {
                    width: 200px;
                    height: 40px;
                    border-radius: 40px;
                    margin-bottom: 15px;
                    box-shadow: 2px 2px 5px 3px #33333333;
                }

                .close {
                    height: 30px;
                    width: 30px;
                    background-image: url("/img/icons/arrow.svg");
                    background-repeat: no-repeat;
                    background-size: 70%;
                    background-position: center center;
                    background-color: unset;
                    transition: transform .5s;
                    justify-self: left;
                    opacity: ${login || signup ? "1" : "0"};
                    transform: translateX(${login || signup ? "0px" : "-50px"});
                    transition: opacity .5s, transform .5s;
                }

                .close:hover {
                    transform: scale(1.2);
                }

                .signup {
                    background: #1D5CAD;
                    color: white;
                    transition: background .5s;
                }

                .signup:hover {
                    background: white;
                    color: #1D5CAD;
                }

                .login {
                    color: #1D5CAD;
                    transition: background .5s;
                }

                .login:hover {
                    background: #1D5CAD;
                    color: white;
                }
                
                .img {
                    background-image: url("/img/login.jpg");
                    object-fit: contain;
                    background-size: auto 100%;
                    height: 100%;
                    
                }    
                
            `}</style>

        </div>
    )
}

export default login
