import React from "react";

type S = { isToggleOn: boolean };
export default class Toggle extends React.Component<{}, S> {
    constructor(props: {}) {
        super(props);
        this.state = { isToggleOn: false };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </button>
                {this.state.isToggleOn ? "显示" : ""}
            </div>
        );
    }

    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }));
    }
}
