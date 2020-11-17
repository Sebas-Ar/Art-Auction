import React, { useState } from 'react'
import Header from './Header'
import Head from "next/head";
import css from "../public/styles/styles.js"
import Nav from './Nav';

const Layout = ({children}) => {

    const [nav, setNav] = useState(false)

    const close = () => {
        setNav(false)    
    }

    const open = () => {
        setNav(true)    
    }
    
    return (
        <div className="container">
            <Head>
                <title>Art Auction</title>
            </Head>
            <Header open={open}/>
            <Nav nav={nav} close={close}/>
            {children}
            <style jsx global>{css}</style>
            <style jsx>{`
                
                .container {
                    margin: 90px 100px 0 100px;
                }

            `}</style>
        </div>
    )
}

export default Layout
