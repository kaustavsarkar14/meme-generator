import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard'
import { getAllMemes } from '../api/memes'

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        getAllMemes().then(data => setData(data.data.memes))
    }, [])

    console.log(data)
    return (
        <div className='container mt-3' style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(20rem, 1fr))" }} >
            {data.map(meme => <MemeCard meme={meme} />)}
        </div>
    )
}
