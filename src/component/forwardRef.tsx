// forwardRef实际上就是当父组件需要得到子组件元素时，可以利用forwardRef来实现

import React, { forwardRef, useRef } from "react";

// ref 要指向dom元素的 div,button ...

export function UseForwardRefForMain() {
    const fixedRef = useRef();

    return (
        <ChildWithForwardRef
            ref={fixedRef}
            num={3}
        />
    )
}

const ChildWithForwardRef = forwardRef(
    ({ num }: any, ref: any) => {
        return (
            <div ref={ref}>
                <h3>{num}</h3>
                <h3>{JSON.stringify(ref.current)}</h3>
            </div>
        )
    }
)
