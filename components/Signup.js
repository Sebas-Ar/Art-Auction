import React, { useState } from 'react'
import axios from 'axios'

const Signup = ({signup}) => {

    const [data, setData] = useState({})

    const onChange = (e) => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {

        if (data.type && data.email && data.password && data.name && data.lastName && data.repeatPpassword) {
            if (data.password === data.repeatPpassword) {
                
                e.preventDefault()
                const url = "/api/register"
                const result = await axios.post(url, data)
                console.log(result)

            } else {
                alert('La contraseña no coincide')
            }
        } else {
            alert('falta algun dato')
        }

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <h2>Signup</h2>
            <select name="type" onChange={(e) => onChange(e)}>
                <option value="" disabled selected>User Type</option>
                <option value="user">User</option>
                <option value="artist">Artist</option>
            </select>
            <input type="text" name="name" placeholder="Name" onChange={(e) => onChange(e)}/>
            <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => onChange(e)}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => onChange(e)}/>
            <input type="password" name="password" placeholder="Password" onChange={(e) => onChange(e)}/>
            <input type="password" name="repeatPpassword" placeholder="Repeat Password" onChange={(e) => onChange(e)}/>
            <button type="submit">
                Submit
            </button>

            <style jsx>{`
        
                form {
                    overflow: hidden;
                    visibility: ${signup ? 'visible' : 'hidden'};
                    height: ${signup ? "370px" : "0px"};
                    opacity: ${signup ? "1" : "0"};
                    display: grid;
                    justify-items: center;
                    grid-gap: 25px;
                    transition: visibility .5s, height .5s, opacity .5s;
                }
                
                h2 {
                    font-weight: 500;
                }

                input, select {
                    box-sizing: border-box;
                    width: 100%;
                    border: none;
                    border-bottom: 2px solid #3361A1;
                    transition: padding .5s;
                }

                option {
                    padding: 5px;
                    margin: 5px;
                    line-height: 5px;

                }

                select {
                    color: ${!data.type ? "#757575" : "#000000"};
                }

                input:focus, select:focus {
                    padding: 10px;
                }
                

                button {
                    width: 200px;
                    height: 40px;
                    border-radius: 40px;
                    margin-bottom: 15px;
                    box-shadow: 2px 2px 5px 3px #33333333;
                    background: #1D5CAD;
                    color: white;
                    transition: background .5s;
                }

                button:hover {
                    background: white;
                    color: #1D5CAD;
                }
        
            `}</style>
        </form>
    )
}

export default Signup
