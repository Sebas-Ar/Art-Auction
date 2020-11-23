import React, { useEffect, useState } from 'react'
import Arts from './Arts'
import axios from 'axios'

const Galery = () => {

    const [gallery, setGallery] = useState([])
    const [Logged, setLogged] = useState(false);

    const getGallery = async () => {

        let url = '/api/arts'
        let result = await axios.get(url)
        setGallery(result.data.message)
        url = '/api/session'
        result = await axios.post(url, {id: sessionStorage.getItem('token')})
        if (result.data.message !== 'error') {
            setLogged(true)
        }
        
    }

    useEffect(() => {
        
        getGallery()

    }, []);

    return (
        <div>
            {
                gallery.map((art, i) => (
                    <Arts key={i} url={art.art_direction} num={i} Logged={Logged}/>
                ))
            }
        </div>
    )
}

export default Galery
