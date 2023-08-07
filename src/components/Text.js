import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function Text() {
    const [editMode, setEditMode] = useState(false)
    const [val, setVal] = useState("double click to edit")
    return (
        <div>
            <h4>
                {
                    editMode ?
                        <input
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                            onDoubleClick={() => setEditMode(false)}
                        />
                        :
                        <Draggable>
                            <h4
                                onDoubleClick={() => setEditMode(true)}

                            >{val}</h4>
                        </Draggable>
                }

            </h4>
        </div>
    )
}
