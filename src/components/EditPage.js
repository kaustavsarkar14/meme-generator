import React, { createRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import Text from './Text'
import { exportComponentAsJPEG } from 'react-component-export-image'

export default function EditPage() {
    const [params] = useSearchParams()
    const [count, setCount] = useState(0)
    const memeRef = createRef()
    return (
        <div className='container'  >
            <div ref={memeRef} className="meme" style={{ border: "1px solid black", width: "30rem", height: "27rem", padding: "0.5rem 1rem" }}>
                <img className='mt-4 mb-4' src={params.get('url')} width="360" alt="" />
                <div className="text" style={{ marginTop:"5rem"}}>
                    {
                        Array(count).fill(0).map(el => <Text />)
                    }
                </div>
            </div>

            <div className="buttons" style={{ position: "fixed" }}>
                <Button className='m-2' onClick={() => setCount(count + 1)} >Add text</Button>
                <Button onClick={() => exportComponentAsJPEG(memeRef)} variant='warning' >Download</Button>
            </div>
        </div>
    )
}
