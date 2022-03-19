import React from 'react';
import ReactDOM from 'react-dom';
import { Comment, mock_comment } from './component/Comment'
import { Clock } from "./component/Clock"
import Toggle from "./component/Toggle"
function Hello(props: any) {
    return (
        <div>
            <h1>Hello</h1>
            <h1>    {props.name}</h1>
        </div>

    )
}

function App() {
    return (
        <div>
            <Hello name='wykon'></Hello>
            <Hello name='abc'></Hello>
            <Hello name='weykon'></Hello>
            <Comment date={mock_comment.date} text={mock_comment.text} author={mock_comment.author} ></Comment>
            <Clock date={new Date()}></Clock>
            <Toggle/>
        </div >
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)


