import React from 'react'
import Link from 'next/link'

const Nav = ({nav, close}) => {
    return (
        <div className="container">

            <nav>
                <button onClick={() => close()}></button>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Exhibitions</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="artist">
                            <a>Artist</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="auctions">
                            <a>Auctions</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>

            </nav>
            <div className="line"></div>
            <div className="img-content">
                <section>
                    <img src="/img/nav.jpg" alt="portada"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis, error reprehenderit tempore facilis laboriosam dicta unde voluptatem sunt laborum.</p>
                </section>
            </div>

            <style jsx>{`

                .container {
                    position: fixed;
                    top: 0;
                    transform: translateX(${nav ? "0%" : "-100%"});
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #101010;
                    color: white;
                    display: grid;
                    grid-template-columns: 1fr 2px 2fr;
                    transition: transform .5s;
                }

                .line {
                    background: white
                }

                nav {
                    margin: 50px;
                    display: grid;
                    grid-template-rows: 1fr 7fr;
                    align-items: center;
                }

                button {
                    width: 40px;
                    height: 40px;
                    background-image: url('/img/icons/times-solid-white.svg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-color: unset;
                    transition: transform .5s;
                }

                button:hover {
                    transform: scale(1.1);
                }


                li {
                    margin: 50px 0;
                }

                a {
                    font-size: 50px;
                    letter-spacing: 8px;
                    color: #555;
                    transition: font-size .5s, color .5s;
                }

                a:hover {
                    font-size: 57px;
                    color: #fff;

                }

                .img-content {
                    align-self: center;
                    justify-self: center;
                }

                img {
                    margin: auto;
                    display: block;
                    width: 50%;
                }

                p {
                    width: 50%;
                    margin:  15px auto;
                }
                
        
            `}</style>
        </div>
    )
}

export default Nav
