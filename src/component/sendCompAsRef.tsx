import React, { memo, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import TestIsRerender from './TestIsRerender';


export default function SendCompAsRefForMain() {
    return (
        <div>
            <h5>-----</h5>
            <TestIsRerender blockName="Main" />


            <ModalBlock />
        </div>

    )


}


function ModalBlock() {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    return (
        <div>
            <h3>1: {state1}</h3>
            <h3>2: {state2}</h3>
            <div >
                <TestIsRerender blockName="update state1" />
                <button onClick={() => setState1(state1 + 1)}> change state1 </button>
            </div>
            {useMemo(() => <div  >
                <TestIsRerender blockName="update state2" />
                <button onClick={() => setState2(state2 + 1)}> change state2 </button>
            </div>, [state2])}
        </div>
    )
}
