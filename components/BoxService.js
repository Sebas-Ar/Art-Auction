import React from 'react'
import UploadArts from './UploadArts'

const BoxService = () => {
    return (
        <div className="container">
            
            <section>
                <h2>title</h2>

                <p>upload your arts</p>

                <UploadArts />

            </section>

            <style jsx>{`
                
                .container {
                    display: grid;
                    justify-items: center;
                    align-items: center;
                }    

                section {
                    width: 100%;
                    border-radius: 10px;
                    border: 1px solid #33333333;
                }
                
            `}</style>
            
        </div>
    )
}

export default BoxService
