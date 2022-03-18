import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props: any) {
    return (
        // <h1>Hello</h1>
        <h1>Hello,{props.name}</h1>
    )
}

function App() {
    return (
        <div>
            <Hello name='wykon'></Hello>
            <Hello name='abc'></Hello>
            <Hello name='weykon'></Hello>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)


