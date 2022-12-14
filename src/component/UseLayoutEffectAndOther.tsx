import React, { useEffect, useImperativeHandle, useLayoutEffect, useState } from "react";


export default function UseLayoutEffectExample() {
    const [v, setV] = useState(1);

    useLayoutEffect(() => {
        console.log('useLayoutEffect', v)
        // 如果这个if放在了useEffect，就会有多次渲染，
        // 放在这里就只有一次
        if (v == 2) {
            // 假设需求不想等于2的
            setV(3);
        }
    }, [v])

    useEffect(() => {
        console.log('useEffect', v)
    }, [v])

    return (
        <div>
            <button onClick={() => setV(2)}>BIG BTN</button>
            {v}
        </div>
    )
}

// want to “batch” a couple updates together before redrawing the screen? 
// https://daveceddia.com/useeffect-vs-uselayouteffect/


// 当使用useEffect作为副作用的时候，对即将执行函数，
// 在涉及改变state中可能引发的重渲染刷新
// 可以使用useLayoutEffect来提前做好设置
// 从而再到了useEffect层，已经做了修改
