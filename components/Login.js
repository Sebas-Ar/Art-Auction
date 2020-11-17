import React from 'react'

const Login = ({login}) => {
    return (
        <form>
            <h3>Login</h3>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>

            <style jsx>{`
        
                form {
                    visibility: ${login ? 'visible' : 'hidden'};
                    height: ${login ? "110px" : "0px"};
                    opacity: ${login ? "1" : "0"};
                    display: grid;
                    justify-items: center;
                    grid-gap: 25px;
                    transition: visibility .5s, height .5s, opacity .5s;
                }

                input {
                    border: none;
                    border-bottom: 2px solid #3361A1;
                }
        
            `}</style>
        </form>
    )
}

export default Login
