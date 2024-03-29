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
import { UseForwardRefForMain } from "./component/forwardRef";
import SendCompAsRefForMain from "./component/sendCompAsRef";
import UseRefForMain from "./component/useRef";
import ForModalGlobalForMain from "./component/ForModalGlobal";
import AppReactTracked from "./component/ReactTracked/app";
import { RefOnCompUsageForMain } from "./component/refForAComp.tsx/refOnCompUsage";
import AnimationForMain from "./component/animation/animation";
import { myTimer, TimerView } from "./mobx/first";
import UseLayoutEffectExample from "./component/UseLayoutEffectAndOther";
import CheckAppendListRerender from "./component/TEST_AppendListRerender";
import AppWithRefToFunction from "./refExposeMethod/calendar";
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
            <h6>This is base</h6>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* <Comment
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
                <SendCompAsRefForMain />
                <UseRefForMain />
                <UseForwardRefForMain />
                <ForModalGlobalForMain/>
                }
                {/* <RefOnCompUsageForMain /> */}
                {/* <AppReactTracked /> */}
                {/* <AnimationForMain /> */}
                {/* <TimerView timer={myTimer}/> */}
                {/* <UseLayoutEffectExample /> */}
                {/* <CheckAppendListRerender/> */}
                <AppWithRefToFunction/>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
