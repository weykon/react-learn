import React from "react";
import ReactDOM from "react-dom";
import { Comment, mock_comment } from "./component/Comment";
import { Clock } from "./component/Clock";
import Toggle from "./component/Toggle";
import { LoginCtrl } from "./component/LoginCtrl";
import { NumberList } from "./component/ListNKey";
import { Calculator } from "./component/BoilingVerdict";
import { UseStateExample } from './component/UseState'
import { UseEffectExample } from './component/UseEffect'
import { UseStopwatchForExample } from "./component/useReducer";
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
        <div style={{ display: 'flex', flexDirection: 'column', background: '#D6E8F7ed', width: '100%', flex: 1 }}>
            <h1>This is base</h1>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Comment
                    date={mock_comment.date}
                    text={mock_comment.text}
                    author={mock_comment.author}
                ></Comment>
                <Clock date={new Date()}></Clock>
                <Toggle />
                <LoginCtrl isLoggedIn={false} />
                <NumberList numbers={[1, 2, 3]} />
                <Calculator />
                <UseStateExample />
                <UseEffectExample />
                <UseStopwatchForExample />
            </div>
            <h1 style={{ backgroundColor: '#F4DCE6' }}>css 练习 flex</h1>
            <div style={{ display: "flex", backgroundColor: '#F4DCE6', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={{ display: "flex", width: '200px', height: '300px', flexFlow: 'row wrap', backgroundColor: 'skyblue', alignItems: 'flex-start' }}>
                    <div style={{ width: '50px', height: '150px', backgroundColor: 'cornflowerblue' }}></div>
                    <div style={{ width: '50px', height: '350px', backgroundColor: 'crimson' }}></div>
                    <div style={{ width: '50px', height: '50px', backgroundColor: 'honeydew' }}></div>
                </div>
                <div style={{ width: '200px', height: '300px', backgroundColor: 'dimgrey', flexDirection: 'row', flexFlow: 'row wrap', display: 'flex', alignContent: 'flex-start' }}>
                    <div style={{ width: '50px', height: '150px', backgroundColor: 'cornflowerblue' }}></div>
                    <div style={{ width: '50px', height: '30px', backgroundColor: 'crimson' }}></div>
                    <div style={{ width: '50px', height: '50px', backgroundColor: 'honeydew' }}></div>
                </div>
                <div style={{ width: '200px', height: '300px', backgroundColor: 'cornsilk', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '50px', height: '150px', backgroundColor: 'cornflowerblue' }}></div>
                    <div style={{ width: '50px', height: '30px', backgroundColor: 'crimson' }}></div>
                    <div style={{ width: '50px', height: '50px', backgroundColor: 'honeydew' }}></div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
