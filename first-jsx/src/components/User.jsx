import React from "react";
const User = (props) => {
    const {firstName,lastName}=props

    return (
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h2>Things I neeed to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt.Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </div>

    )
}

export default User