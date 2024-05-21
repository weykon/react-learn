import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit'

export const store =
    configureStore({
        reducer: {},
    });

export function StoreThenUseSelector() {
    const dispatch = useDispatch();
    const { count, name } = useSelector((state: any) => state);

    return (
        <Provider store={store}>
            <div>
                <h1>StoreThenUseSelector</h1>
                <h2>Count: {count}</h2>
                <h2>Name: {name}</h2>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'CHANGE_NAME', payload: 'John' })}>Change Name</button>
            </div>
        </Provider>
    );
}
