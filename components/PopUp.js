import React from 'react'

const PopUp = ({setPopUp, popUp}) => {
    return (
        <div className="container">
            <section>
                <button onClick={() => setPopUp(false)} className="close"></button>
                <h3>title</h3>
            </section>

            <style jsx>{`
            
                .container {
                    visibility: ${popUp ? 'visible' : 'hidden'};
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background: #33333333;
                }

                section {
                    position: relative;
                    box-sizing: border-box;
                    padding: 30px;
                    background: white;
                    width: 400px;
                    height: 400px;
                    border-radius: 30px;
                }

                .close {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    width: 30px;
                    height: 30px;
                    background-image: url("/img/icons/times-solid-blue.svg");
                    background-color: unset;
                    background-position: center;
                    background-repeat: no-repeat;
                    transition: transform .5s;
                }

                .close:hover {
                    transform: scale(1.1)
                }
            
            `}</style>
        </div>
    )
}

export default PopUp
