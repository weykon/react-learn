import _ from "lodash";
import React, { ComponentType, createContext, forwardRef, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import TestIsRerender from "./TestIsRerender";

export default function ForModalGlobalForMain() {
    return (
        <App />
    )
}

function App() {
    return (
        <ModalProvider>
            <div>
                <h3>---</h3>
                App Page
                <SomePage />
                <ModalPage />
                <h3>---</h3>
            </div>
        </ModalProvider>
    )
}

const store = {
    Comp: (props: ModalProps) => <><h5>Defualt Modal 1</h5></>,
    Props: {
        isOpen: true,
        data: { name: 'hello' },
        toModal: () => { },
        toPage: () => { },
    }
}



const ModalCompContext = createContext<{
    ModalComp: ComponentType<ModalProps>,
    setModalComp: React.Dispatch<React.SetStateAction<JSX.Element>>
}>(null);
const ModalPropsContext = createContext<{
    ModalProps: ModalProps,
    setModalProps: React.Dispatch<React.SetStateAction<ModalProps>>
}>(null);

type ModalContextType = {
    Comp: ComponentType<ModalProps>
    Props: ModalProps
}
type ModalProps = {
    isOpen: boolean,
    data: any,
    toModal: (event: string, data: any) => any,
    toPage: (event: string, data: any) => any,
}


function ModalProvider({ children }: { children: JSX.Element }) {
    const modalComp = useRef(store.Comp)
    const setModalComp = (newComp: any) => { modalComp.current = newComp; }
    const [modalProps, setModalProps] = useState(store.Props)

    const cacheProps = useMemo(() => (
        {
            modalProps: () => _.cloneDeep(modalProps),
            setModalProps,
        }
    ), [])
    return (
        <ModalCompContext.Provider
            value={{ ModalComp: modalComp.current, setModalComp: setModalComp }}
        >
            <ModalPropsContext.Provider
                value={{ ModalProps: modalProps, setModalProps }}
            >
                {children}
            </ModalPropsContext.Provider>
        </ModalCompContext.Provider>
    )
}

function ModalPage() {
    const { ModalComp } = useContext(ModalCompContext)
    const { ModalProps } = useContext(ModalPropsContext)
    return (
        <div>
            <ModalComp {...ModalProps} />
        </div>
    )
}

function SomePage() {
    const { setModalComp } = useContext(ModalCompContext)
    const { ModalProps, setModalProps } = useContext(ModalPropsContext)
    useEffect(() => {
        setModalComp(Modal);
        setModalProps({
            isOpen: false,
            data: { name: 'abc', count: 0 },
            toModal: () => { }, toPage: () => { }
        })
    }, [])

    return (
        <div>
            <TestIsRerender blockName='some page' />
            <h4>This is a New Page</h4>
            <button onClick={() =>
                setModalProps(
                    {
                        ...ModalProps,
                        isOpen: !ModalProps.isOpen
                    }
                )
            } >abc</button>
            <button onClick={() =>
                setModalProps(
                    {
                        ...ModalProps,
                        data: { count: ModalProps.data.count + 1 }
                    }
                )
            } >count</button>
            <h4>This is the end</h4>
        </div>
    )
}

function Modal() {
    const { ModalProps } = useContext(ModalPropsContext);

    return (
        <div>
            {ModalProps.isOpen ?
                <div>
                    <h5>I'm a Modal from this Page</h5>
                    <h5>This is My Data:</h5>
                    <h5>{ModalProps.data.name}</h5>
                    <h5>{ModalProps.data.count}</h5>
                </div>
                : null
            }
        </div>
    )
}
