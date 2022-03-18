import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props: any) {
    return (
        // <h1>Hello</h1>
        <h1>Hello,{props.name}</h1>
    )
}

ReactDOM.render(
    <Hello name='wykon'/>,
    document.getElementById("app")
)


