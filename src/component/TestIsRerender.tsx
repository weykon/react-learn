import React, { useState, useEffect, useReducer, useRef, useContext, createContext } from "react";

export default function TestIsRerender({ blockName }: any) {
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>
            <h3>{blockName}:{renderCount.current}</h3>
        </div>
    )
}