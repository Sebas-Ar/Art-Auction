import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero">

            <div className="text">
                <h3>Bogotá DC Galeries</h3>
                <h1>Art Auction</h1>
                <Link href="/about">
                    <a>
                        <p>About</p>
                    </a>
                </Link>
            </div>

            <style jsx>{`
                
                .hero {
                    width: 100%;
                    height: calc(100vh - 90px);
                    background-image: url("/img/hero.jpg");
                    display: grid;
                    align-items: center;
                }

                .text {
                    background: #33333399;
                    padding: 10px 0;
                    text-align: center;
                    color: white;
                }

                h1 {
                    font-size: 90px;
                    font-weight: 900;
                    margin: 10px 0;
                    color: #BBDEFB;
                }

                a {
                    color: white;
                    text-decoration: underline;
                }
                
            `}</style>
        </div>
    )
}

export default Hero
