import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function MemeCard({meme}) {
    const navigate = useNavigate()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={meme.url} />
                <Card.Body>
                    <Card.Title>{meme.name}</Card.Title>
                    <Button onClick={(e)=>navigate(`/edit?url=${meme.url}`)} variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
