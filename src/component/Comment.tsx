import React from "react";

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