import React from "react";
type P = { isLoggedIn: boolean };
export function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1><button>登陆</button>
    </div>
  );
}
export function UserGreeting() {
  return (
    <div>
      <h1>Welcome back!</h1>;
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
