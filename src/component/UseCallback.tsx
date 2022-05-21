import React, { useCallback, useState } from "react"

const Father = () => {
    const [rerenderChild, setRerenderChild] = useState(false)
    const onChangeChild = useCallback(() => {
        return !rerenderChild;
    }, [rerenderChild])

    return (
        <Child change={onChangeChild()} />
    )
}
// 区别：useCallback 和 useMemo 的区别是useCallback返回一个函数，当把它返回的这个函数作为子组件使用时，可以避免每次父组件更新时都重新渲染这个子组件，
const Child = ({ change }: { change: boolean }) => {
    return (
        <div>
            {change}
        </div>
    )
}