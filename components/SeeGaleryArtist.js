import Axios from 'axios'
import React, { useEffect, useState } from 'react'


const SeeGaleryArtist = ({id}) => {

    const [gallery, setGallery] = useState([])

    const getData = async () => {

        const url = `/api/arts?id_artist=${id}`

        const result = await Axios.get(url)
        setGallery(result.data.message)

    }

    useEffect(() => {
        
        getData()
        
    }, [])

    return (
        <div className="container">
            
            <h1>test</h1>
            {
                gallery.map((art, i) => (
                    <img key={i} src={art.art_direction} alt="obra de arte"/>
                ))
            }
            <style jsx>{`
            
                .container {

                }
            
            `}</style>
        </div>
    )
}

export default SeeGaleryArtist
