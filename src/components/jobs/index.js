import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

//components
import Grid from "lib/grid"

export default class Jobs extends React.Component {
    render () {
        return (
            <Grid>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                        <Link to={`/jobs/${this.props.url}`}>
                            <p>{this.props.title}</p>
                        </Link>
                </div>
            </Grid>
        )
    }
}
