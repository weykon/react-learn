import React, { useState } from "react";


export default function CheckAppendListRerender() {
    const [list, setList] = useState([{ id: 1, value: 1 }, {
        id: 2, value: 2
    }])

    const addElement = () => {
        const num = list.length + 1
        setList([...list, ...list])
    }

    return (
        <div>
            <button onClick={() => addElement()}>add new</button>

            <li>
                {list.map((e, i) => {
                    return (
                        <ul key={e.id}>
                            {e.value}
                        </ul>
                    )
                })}
            </li>
        </div>

    )
}