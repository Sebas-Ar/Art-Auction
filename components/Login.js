import React, { useState } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'

const Login = ({login}) => {

    const router = useRouter()

    const [data, setData] = useState({})

    const onChange = (e) => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (data.type && data.email && data.password) {
            const url = "/api/login"
            const result = await axios.post(url, data)
            console.log(result.data)
            if (result.data.status === 'ok') {
                sessionStorage.setItem('token',result.data['id'])
                router.replace('/profile')
            }
        } else {
            alert('falta algun dato')
        }

    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <h2>Login</h2>
            <select name="type" onChange={(e) => onChange(e)}>
                <option value="" disabled selected>User Type</option>
                <option value="user">User</option>
                <option value="artist">Artist</option>
            </select>
            <input type="email" name="email" placeholder="Email" onChange={(e) => onChange(e)}/>
            <input type="password" name="password" placeholder="Password" onChange={(e) => onChange(e)}/>
            <button type="submit">
                Submit
            </button>

            <style jsx>{`
        
                form {
                    overflow: hidden;
                    visibility: ${login ? 'visible' : 'hidden'};
                    height: ${login ? "240px" : "0px"};
                    opacity: ${login ? "1" : "0"};
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

export default Login
