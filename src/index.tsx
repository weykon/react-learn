import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props: any) {
    return (
        <h1>Hello</h1>
    )
}

ReactDOM.render(
    <Hello />,
    document.getElementById("app")
)


