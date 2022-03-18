import React from "react";

type P = { date: Date }
export class Clock extends React.Component<P, P> {
    timeId: NodeJS.Timer;
    constructor(props: P) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount(): void {
        this.timeId = setInterval(() => this.tick(), 1000);
    }
    tick(): void {
        this.setState({ date: new Date() })
    }
    componentWillUnmount(): void {
        clearInterval(this.timeId)
    }

    render() {
        return (
            <div>
                <h1>时钟显示,</h1>
                <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}