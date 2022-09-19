import { functionsIn } from 'lodash';
import React, { ComponentType, forwardRef, ReactNode, useCallback, useRef, useState } from 'react';

// useRef 和 createRef 的区别

// useRef 仅能用在 FunctionComponent，而createRef 仅能用在 ClassComponent。

// 像 state 一样，ref 在 re-render 之间被 React 保留
function TheBaseUseRef() {
    const ref = useRef(0);
    console.log('声明一个 useRef : 0', ref);

    const handleClick = useCallback(() => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }, [])

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}


const TestComp0 = forwardRef((props, ref: any) => {
    return (
        <div ref={ref}>
            <h1>title 0</h1>
        </div>

    )
})

const TestComp1 = forwardRef((props: any, ref: any) => {
    return (
        <div ref={ref}>
            <h1>title 1</h1>
        </div>
    )
})

export default function UseRefForMain() {
    console.log('useRef test: ')
    const [select, setSelect] = useState(true);
    const wRef = useRef()
    return (
        <div>
            <TheBaseUseRef />
            {select ?
                <TestComp1 ref={wRef} />
                : <TestComp0 ref={wRef} />
            }
            <button onClick={() => setSelect(!select)}>
                change component
            </button>
        </div>

    )
}