import React from "react"


//lib
import Grid from "lib/grid"


export default class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          job: {}
        }
      }

      componentDidMount() {
          fetch("https://api.teamtailor.com/v1/jobs/", {
            method: "GET",
            headers: ({
            Accept: "application/vnd.api+json",
            "Content-Type": "application/json",
            "X-Api-Version": 20161108,
            Authorization: "Token ci4U-k0GCxLNZhWFLiI74XOVJXEzD_iRuLozdh2H",
          }),
            body: JSON.stringify()
          }).then(response =>
              {response.json().then(response => {
            const job = response.data.find(i => (i.id === this.props.match.params.id))
            this.setState({
                job: job.attributes
            })
          })
      })
  }

    removeTags = () => {
      const body = this.state.job.body
      console.log(body);
      const regex = /(&nbsp;|<([^>]+)>)/ig
      if (body) {
          const result = body.replace(regex, " ")
          return result
      } else {
          console.log("no body");
      }
  }


    render() {
        return (
            <Grid>
                <p>{this.state.job.title}</p>
                <p>{this.removeTags()}</p>
            </Grid>
        )
    }
}
