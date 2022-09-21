import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
    count: 0,
    text: 'hello',
    data: { a: 1 }
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
    createContainer(useMyState);
