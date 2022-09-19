import React, { ComponentType, createContext, Reducer, useContext, useMemo, useReducer, useState } from "react";

function AComponentTypeToContainer(
    props: {
        children: any
    }
) {
    const [anyState, anyDispatch] = useAnyHook();
    return props.children([anyState, anyDispatch]);
}

function useAnyHook() {
    const [anyState, anySet] = useState();
    return [anyState, anySet]
}

function ForMainFromCtrlChildren() {
    return (
        <AComponentTypeToContainer >
            {([anyState, anySet]) => {
                return <div></div>
            }}
        </AComponentTypeToContainer >
    )
}