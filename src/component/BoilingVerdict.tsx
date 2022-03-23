import React, { EventHandler, FormEvent, SyntheticEvent } from "react";

type P = { celsius: number };
function BoilingVerdict(props: P) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

type S = { temperature: string };
export class Calculator extends React.Component<{}, S> {
    constructor(props: any) {
        super(props);
        this.state = { temperature: "" };
    }

    handleChange(e: FormEvent<{ value: any }>) {
        this.setState({ temperature: e.currentTarget.value });
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={this.handleChange.bind(this)}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}


class Temperature