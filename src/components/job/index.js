import React from "react"
import "./style.css"

export default class Job extends React.Component {
    render() {
        return (
            <div>Hi from Job <p>{this.props.type}</p></div>
        )
    }
}
