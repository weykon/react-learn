import React, { useState, useEffect, useReducer, useRef, useContext, createContext } from "react";

export function UseContextExample() {

}

const PageContext = createContext(0);

const Father = () => {
    const [count, setCount] = useState(0);
    return (
        <PageContext.Provider value={count}>
            <Son />
        </PageContext.Provider>
    )
}

const Son = () => {
    const count = useContext(PageContext)
    return <div>{count}</div>
}