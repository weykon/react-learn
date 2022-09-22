import React from 'react';
import TestIsRerender from '../TestIsRerender';

import { useSharedState, useTrackedState } from './store';

const TextBox = () => {
    const [state, setState] = useSharedState();
    const setText = (text: string) => {
        setState((prev) => ({ ...prev, text }));
    };

    return (
        <div>
            <TestIsRerender blockName={'TextBox'} />
            {state.text}
            <input value={state.text} onChange={(e) => setText(e.target.value)} />
            <TestTheTrackedState />
        </div>
    );
};

const TestTheTrackedState = () => {
    const { count0 } = useTrackedState();
    return (
        <div>
            <TestIsRerender blockName={'TestTheTrackedState'} />
            This is Test TrackedState
            <h5>count0: {count0}</h5>
        </div>
    )
}
export default TextBox;
