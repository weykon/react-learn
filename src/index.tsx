import React from 'react';
import ReactDOM from 'react-dom';
import { Comment } from './component/Comment'
import {Clock} from "./component/Clock"
function Hello(props: any) {
    return (
        // <h1>Hello</h1>
        <h1>Hello,{props.name}</h1>
    )
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

function App() {
    return (
        <div>
            <Hello name='wykon'></Hello>
            <Hello name='abc'></Hello>
            <Hello name='weykon'></Hello>
            <Comment date={comment.date} text={comment.text} author={comment.author} ></Comment>
            <Clock ></Clock>
        </div >
    )
}



ReactDOM.render(
    <App />,
    document.getElementById("app")
)


