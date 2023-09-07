import React, { useEffect, useImperativeHandle, useRef, useState } from "react"
export default function App() {
    return (
        <div>
            <Parent />
            <button onClick={() => {
                bindRef.nextMonth();
            }}>
                这是一个外置的按钮
            </button>
        </div>
    )
}
const Calendar = React.forwardRef((props, ref) => {
    const [month, setMonth] = useState(0)
    const nextMonth = () => { setMonth((prev) => prev + 1) }
    const prevMonth = () => { setMonth((prev) => prev - 1) }

    useImperativeHandle(ref, () => ({
        nextMonth,
        prevMonth
    }));

    return (
        <div>{month}</div>
    )
})

const Parent = () => {
    const cal = useRef();
    useEffect(() => {
        bindRef = cal.current;
    }, [])

    const onNext = () => {
        (cal.current as any).nextMonth()
    }

    return (
        <React.Fragment>
            <Calendar ref={cal} />
            <button type="button" onClick={onNext}>Next</button>
        </React.Fragment>
    )
}

// 以上的基本的写完后，
// 直接用一个全局变量保存
export let bindRef: any;
