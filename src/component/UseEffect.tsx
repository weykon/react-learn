import React, { useState, useEffect } from "react";

export function UseEffectExample() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

        return function cleanup() {
            document.title = `unmount`;
        };
    }, [count]);   // 第二个参数作为告诉react diff

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
