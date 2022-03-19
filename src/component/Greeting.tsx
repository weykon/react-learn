import React from "react";
type P = { isLoggedIn: boolean };
function GuestGreeting() {
    return (
        <div>
            <h1>Please sign up.</h1>
        </div>
    );
}
function UserGreeting() {
    return (
        <div>
            <h1>Welcome back!</h1>
        </div>
    );
}

export function Greeting(props: P) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}
