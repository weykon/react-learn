import React from "react";

type ListItem = { value: number };
function ListItem(props: ListItem) {
    return <li>{props.value}</li>;
}

type P = { numbers: number[] };
export function NumberList(props: P) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
        <ListItem key={number.toString()} value={number} />;
    });
    return (
        <ul>{listItems}</ul>
    )
}
