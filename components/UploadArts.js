import React, { useState } from 'react'
import axios from 'axios'


const UploadArts = () => {

    const [art_direction, setArt] = useState({})

    const onSubmit = async (e) => {

        e.preventDefault()

        const url = '/api/arts'
        const result = await axios.post(url, {
            art_direction,
            _id: "5fb36eaf8cf5db422c3c8ce9"
        })
        console.log(result)

    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" name="file" onChange={e => setArt(e.target.value)} placeholder="URL"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadArts
