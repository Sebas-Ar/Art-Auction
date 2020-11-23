import React, { useState } from 'react'
import Swal from 'sweetalert2'
import PopUp from './PopUp'

const Arts = ({url, num, Logged}) => {

    const [popUp, setPopUp] = useState(false)
    
    const onClick = () => {
        if (!Logged) {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'You must log in to participate in the purchase / auction',
                showConfirmButton: true
            })
        } else {
            console.log('press')
            console.log(popUp)
            setPopUp(true)
        }
    } 
    
    return (
        <div className="container">
            <img src={url} alt="galery1"/>

            <section className="description">
                <p className="location">location</p>
                <h3>title</h3>
                <h4>Artist Name</h4>
                <p className="date">Date</p>
                <button onClick={() => onClick()}>Buy</button>
            </section>
            <PopUp setPopUp={setPopUp} popUp={popUp}/>

            <style jsx>{`
                
                .container {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    align-items: center;
                    justify-items: center;
                    margin: 50px 0;
                }

                img {
                    max-width: 500px;
                    max-height: 500px;
                    object-fit: cover;
                }

                .description {
                    justify-self: left;
                }

                h3 {
                    text-transform: uppercase;
                    font-size: 50px;
                    margin: 20px 0;
                }

                .date {
                    margin: 20px 0;
                }

                button {
                    width: 100px;
                    height: 30px;
                    border-radius: 30px;
                    background-color: #BBDEFB;
                    transition: background-color .5s, color .5s;
                }

                button:hover {
                    background-color: #1E88E5;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default Arts
