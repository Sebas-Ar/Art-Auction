import React, { useEffect, useState } from 'react'
import BoxService from '../components/BoxService'
import Layout from '../components/Layout'
import LayoutUser from '../components/LayoutUser'
import SeeGaleryArtist from '../components/SeeGaleryArtist'
import UploadArts from '../components/UploadArts'
import axios from 'axios'

const profile = () => {

    const [id, setId] = useState('')

    useEffect(() => {
        
        get()

    }, [])

    const get = async () => {
        
        if (sessionStorage.getItem('token')) {
            const url = '/api/session'
            const result = await axios.post(url, {id: sessionStorage.getItem('token')})
            if (result.data.message !== 'error') {
                setId(result.data.message._id);
                /* const {user} = result.data.data
                setData(user)
                if (user.mustChangePass) {
                    setChangePassword(true)
                } */
            } else {
                router.replace("/")
            }
        } else {
            router.replace("/")
        }
    } 

    return (
        <Layout>
            <LayoutUser>
                <div className="container">
                    <BoxService>
                        <UploadArts />
                    </BoxService>
                    <BoxService>
                        <SeeGaleryArtist id={id}/>
                    </BoxService>
                    <style jsx>{`
                    
                        .container {
                            display: grid;
                            box-sizing: border-box;
                            padding: 100px 100px 100px 0;
                        }
                    
                    
                    `}</style>
                    <style jsx>{`


                    
                    `}</style>
                </div>
            </LayoutUser>
        </Layout>
    )
}

export default profile
