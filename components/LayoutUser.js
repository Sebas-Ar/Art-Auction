import React from 'react'

const LayoutUser = ({children}) => {
    return (
        <div className="container">

            <div className="profile">
                    <img src="/img/incognito.png" alt=""/>
                    <p>welcome Mr.....</p>
            </div>


            {children}
            
            <style jsx>{`

                img {
                    height: 200px;
                    width: 200px;
                    border: 3px solid #1976D2;
                    border-radius: 50%;
                    align-self: flex-end;
                }

                .profile {
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                    grid-gap: 20px;
                    justify-items: center;
                }

                .container {
                    height: calc(100vh - 90px);
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                }    
                
            `}</style>


        </div>
    )
}

export default LayoutUser
