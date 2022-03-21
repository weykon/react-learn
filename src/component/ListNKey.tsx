import React from "react";

type ListItem = { value: number };
function ListItem(props: ListItem) {
    return <li>{props.value}</li>;
}

type P = { numbers: number[] };
export function NumberList(props: P) {
    console.log("in ", props);
    const numbers = props.numbers;
    const listItems = numbers.map((number, i) => {
        return <ListItem key={number + ""} value={number} />;
    });
    console.log(listItems);
    return <ul>{listItems}</ul>;
}
