import React from "react";
import { Greeting } from "./Greeting";
type P = { isLoggedIn: boolean };
type TButton = { onClick: React.MouseEventHandler<HTMLButtonElement> };
function LoginButton(props: TButton) {
    return <button onClick={props.onClick}>点击登陆</button>;
}
function LogoutButton(props: TButton) {
    return <button onClick={props.onClick}>点击退出</button>;
}
export class LoginCtrl extends React.Component<P, P> {
    constructor(props: P) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = (
                <LogoutButton onClick={this.handleLogoutClick.bind(this)} />
            );
        } else {
            button = <LoginButton onClick={this.handleLoginClick.bind(this)} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />{button}
            </div>
        );
    }
}
