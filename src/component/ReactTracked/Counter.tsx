import React from 'react';

import { useSharedState } from './store';

const Counter = () => {
    return (
        <div>
            <MainCounter />
            <SubCounter />
        </div>
    );
};

const MainCounter = () => {
    const [state, setState] = useSharedState();
    const increment = () => {
        setState((prev) => ({ ...prev, count: prev.count + 1 }));
    };
    return (
        <div>
            {state.count}
            <button onClick={increment}>+1</button>
            {Math.random()}
        </div>
    )
}

const SubCounter = () => {
    const [state, setState] = useSharedState();
    const setA = (a: number) => {
        setState((prev) => ({ ...prev, data: { a } }))
    }
    return (
        <div>
            {state.data.a}
            <button onClick={() => setA(state.data.a + 1)}>+1</button>
            <button onClick={() => setState({ ...state, count0: state.count0 + 1 })}>count0 +1</button>
        </div>
    )
}
const testTheTrackedState = () => {

}
export default Counter;
