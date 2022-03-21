import React from "react";
import ReactDOM from "react-dom";
import { Comment, mock_comment } from "./component/Comment";
import { Clock } from "./component/Clock";
import Toggle from "./component/Toggle";
import { LoginCtrl } from "./component/LoginCtrl";
import { NumberList } from "./component/ListNKey";
function Hello(props: any) {
    return (
        <div>
            <h1>Hello</h1>
            <h2>{props.name}</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            <Hello name="wykon"></Hello>
            <Hello name="abc"></Hello>
            <Hello name="weykon"></Hello>
            <Comment
                date={mock_comment.date}
                text={mock_comment.text}
                author={mock_comment.author}
            ></Comment>
            <Clock date={new Date()}></Clock>
            <Toggle />
            <LoginCtrl isLoggedIn={false} />
            <NumberList numbers={[1,2,3]} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
