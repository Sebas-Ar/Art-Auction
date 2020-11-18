import React, { useEffect, useState } from 'react'
import Arts from './Arts'
import axios from 'axios'

const Galery = () => {

    const [gallery, setGallery] = useState([])

    const getGallery = async () => {

        const url = '/api/arts'
        const result = await axios.get(url)
        setGallery(result.data.message)
        
    }

    useEffect(() => {
        
        getGallery()

    }, []);

    return (
        <div>
            {
                gallery.map((art, i) => (
                    <Arts key={i} url={art.art_direction} num={i}/>
                ))
            }
        </div>
    )
}

export default Galery
