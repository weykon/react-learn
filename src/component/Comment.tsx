import React from "react";


export const mock_comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

export function Comment(props: any) {
    return (
        <div className="Comment" >
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
        {props.date.toLocaleDateString()}
      </div>
        </div>
    )
}

function Avatar(props: any) {
    return (
        <div>图片</div>
    )
}

function UserInfo(props: any) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    )
}