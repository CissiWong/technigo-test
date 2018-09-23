import React  from 'react'
import "./style.css"

//components
//import Job from "components/job"
import Grid from "lib/grid"


class Start extends React.Component {

    render () {
        const regex = /(&nbsp;|<([^>]+)>)/ig
        const result = this.props.text.replace(regex, " ");
        return (
            <Grid>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.title}</p>
                    <p>{result}</p>
                </div>
            </Grid>
        )
    }
}

export default Start
