import React, { useState } from 'react'
import axios from 'axios'

const Signup = ({signup}) => {

    const [data, setData] = useState({})

    const onChange = (e) => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const url = "/api/register"
        const result = await axios.post(url, data)
        console.log(result)

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <h1>Signup</h1>
            <select name="type" onChange={(e) => onChange(e)}>
                <option value="">User Type</option>
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
                    visibility: ${signup ? 'visible' : 'hidden'};
                    height: ${signup ? "110px" : "0px"};
                    opacity: ${signup ? "1" : "0"};
                    display: grid;
                    justify-items: center;
                    grid-gap: 25px;
                    transition: visibility .5s, height .5s, opacity .5s;
                }

                input, select {
                    width: 100%;
                    border: none;
                    border-bottom: 2px solid #3361A1;
                }
        
            `}</style>
        </form>
    )
}

export default Signup
