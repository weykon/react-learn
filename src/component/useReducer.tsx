import React, { useState, useEffect, useReducer, useRef } from "react";

export function UseReducerExample() {
    const reducer = (state: { counter: number; }, action: { type: any; }) => {
        let newState;
        switch (action.type) {
            case 'increase':
                newState = { counter: state.counter + 1 };
                break
            case 'descrease':
                newState = { counter: state.counter - 1 };
                break
            default: throw new Error();
        }
        return newState;
    }
    const initialState = { counter: 0 };
    const action = { type: 'increase' };
    const [state, dispatch] = useReducer(reducer, initialState);
}

export function UseStopwatchForExample() {
    const initialState = { isRunning: false, time: 0 };
    const reducer = (state: { time: number, isRunning: boolean }, action: { type: any; }) => {
        switch (action.type) {
            case 'start': return { ...state, isRunning: true };
            case 'stop': return { ...state, isRunning: false };
            case 'reset': return { isRunning: false, time: 0 };
            case 'tick': return { ...state, time: state.time + 1 };
            default: throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    useEffect(() => {
        if (!state.isRunning) return
        idRef.current = window.setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
            window.clearInterval(idRef.current);
            idRef.current = 0;
        }
    }, [state.isRunning])

    return (
        <div>
            {state.time}s
            <button onClick={() => dispatch({ type: 'start' })}>
                Start
            </button>
            <button onClick={() => dispatch({ type: 'stop' })}>
                Stop
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )

}


export function UseMyExample0() {
    const [thisIsComplexState, justHappen] =
        useReducer((
            eachSmallStateOrSome: any,
            whatWillbeHappen: { doing: any; }) => {
            switch (whatWillbeHappen.doing) {
                case 'just_sit': return { ...eachSmallStateOrSome, where: 'Shop' }
                case 'just_sleep': return { where: 'Home' }
            }
        }, {
            where: 'moon'
        })

    return (
        <div>
            <button onClick={() => justHappen({ doing: 'just_sit' })}>sit</button>
            {thisIsComplexState.doing ?
                <div>doing</div> : null
            }
        </div>
    )
}

export function UseMyExample1() {
    const [complexState, dispatch] =
        useReducer((complexState: any, action: any) => {
            switch (action) {
                case 'changeName': return { ...complexState, name: 'AJ' };
                case 'sleep': return { name: 'LS', sleep: 'good' };
            }
        }, {
            name: 'Jarde'
        });

    return (
        <div>
            {complexState.name === 'Jarde' && <div>Jarde in!</div>}
            <button onClick={() => dispatch('action')}>action</button>
        </div>
    )
}

// 买新车和买新房
type Situations = { happy: number, cost: number }
export function ComplexSituation() {
    const [situations, decision] = useReducer<(situations: Situations, actionCode: 'carcar' | 'househouse') => Situations>(
        (situations: Situations, actionCode: 'carcar' | 'househouse') => {
            switch (actionCode) {
                case 'carcar': return { happy: 30, cost: 30 }
                case 'househouse': return { happy: 13, cost: 300 }
                default: return { ...situations }
            }
        }, { happy: 0, cost: 0 }
    )
    return (
        <div>
            {situations.happy === 1 && <div>nonono</div>}
            <button onClick={() => decision('carcar')}>buy car</button>
        </div>
    )
}

export function sendMultiParamsByObjectToAction() {
    const reducer = (situations: { coffeeDay: 'StarBucker' | 'any', coffee: 'Moca' | 'any' }, actionCode: {
        coffeeDay: 'StarBucker' | 'any', coffee: 'Moca' | 'any'
    }) => {
        return actionCode
    }

    const [whatIsTodayFromCoffee, gogogo] = useReducer(reducer, {
        coffeeDay: 'StarBucker', coffee: 'Moca'
    })

    return (
        <div>
            {'test' ?
                gogogo({ coffeeDay: 'StarBucker', coffee: 'any' }) + ''
                : gogogo({ coffeeDay: 'any', coffee: 'Moca' }) + ''
            }
        </div>
    )
}

