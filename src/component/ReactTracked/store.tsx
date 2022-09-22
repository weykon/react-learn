import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
    count: 0,
    count0: 0,
    text: 'hello',
    data: { a: 1 }
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState, useTrackedState} =
createContainer(useMyState);


// "useTrackedState"
// The useTrackedState hook returned by 
// createContainer is for state from useValue;
// This is wrapped by Proxies as same as useTracked. 
// Use this hook if you don't need update. 

// useSelector 作用是订阅监听创建对返回值更新的事件，并重新计算值然后渲染