import React, { ComponentType, forwardRef, useEffect, useRef, useState } from "react";
import useForceUpdate from "../useForceUpdate";

export function RefOnCompUsageForMain() {
    const [state, set] = useState(0);

    const ConstCompRef = useRef(() => <>Default Modal</>);
    const forceUpdate = useForceUpdate()
    useEffect(() => {
        console.log('effect: ')
        ConstCompRef.current = () => <MountComp />;
        forceUpdate();
    }, [])

    return (
        <div style={{ backgroundColor: '#0006' }}>
            <RefComp ref={ConstCompRef} />
            <div style={{ backgroundColor: '#0006' }}>
                <h3>This a Mount Comp: {state}</h3>
                <h5>{Math.random()}</h5>
                <button onClick={() => set(state + 1)}>add 1</button>
            </div>
        </div>
    )

}

const RefComp = forwardRef(
    (
        props,
        ref: React.MutableRefObject<
            () => JSX.Element
        >
    ) => {

        return (
            <div ref={ref.current}>
                <h5>{Math.random()}</h5>
                <ref.current />
            </div>
        )
    })

function MountComp() {
    const [state, set] = useState(0);
    const [state0, set0] = useState(1);
    useEffect(() => {

    }, [])

    return (
        <div style={{ backgroundColor: '#0006' }}>
            <h3>This a Mount Comp: {state}</h3>
            <h5>{Math.random()}</h5>
            <button onClick={() => set(state + 1)}>add 1</button>
            <h5>{Math.random()}</h5>
            <h3>second: {state0}</h3>
            <button onClick={() => set0(state0 + 1)}>0: add 1</button>
            <SubComp />
        </div>
    )
}

function SubComp() {
    const [state, set] = useState(0);

    return (
        <div style={{ backgroundColor: '#0006' }}>
            <h3>This a Sub Comp: {state}</h3>
            <h5>{Math.random()}</h5>
            <button onClick={() => set(state + 1)}>add 1</button>
        </div>
    )
}