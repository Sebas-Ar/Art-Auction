import Link from 'next/link'
import React from 'react'

const Header = ({open}) => {
    return (
       <header>
            <button className="menu" onClick={() => open()}></button>
            <Link href="/">
                <a className=".logo">
                    <img src='/img/image-gallery.png' alt="logo"/>
                </a>
            </Link>
            <Link href="session">
                <a className="login">
                    <button className="login_button"></button>
                </a>
            </Link>

            <style jsx>{`


                header {
                    background-color: white;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    height: 90px;
                    display: grid;
                    align-items: center;
                    grid-template-columns: 1fr 1fr 1fr;
                    position: fixed;
                    width: 100%;
                    padding: 0 100px;
                }   

                .logo {
                    justify-self: center;             
                }

                img {
                    display: block;
                    height: 90px;
                    margin: auto;
                    object-fit: cover:

                }

                .menu {
                    justify-self: left;
                    width: 35px;
                    height: 35px;
                    background-image: url('/img/icons/bars-solid.svg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-color: unset;
                    transition: transform .5s;
                }

                .menu:hover, .login:hover {
                    transform: scale(1.1);
                }

                .login {
                    justify-self: right;
                    width: 35px;
                    height: 35px;
                    background-image: url('/img/icons/user-solid.svg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-color: unset;
                    transition: transform .5s;
                }
               
            `}</style>
       </header> 
    )
}

export default Header
